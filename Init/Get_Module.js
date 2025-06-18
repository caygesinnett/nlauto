import Puppeteer from 'puppeteer'

/**
 * @description Goes to module page and extracts all documentation info
 * @param {{Name: String, Link: String}} param0
 * @returns {Promise<*>}
 */
export default async function Get_Module({Name, Link}) {
  const Browser = await Puppeteer.launch()
  const Page = await Browser.newPage()
  await Page.goto(Link)
  const Module_Info = await Page.evaluate(In_Module_Console)
  await Browser.close()
  return [Name, Module_Info]

  function In_Module_Console() {
    return [...document.querySelectorAll('.table-responsive')]
      .map(div =>
        div.parentElement?.closest('div')?.parentElement?.closest('div'),
      )
      .filter(div => div)
      .map(div => ({
        Name: div?.querySelector('h2')?.textContent?.slice(0, -15),
        Table: [
          ...(div?.querySelector('table')?.querySelectorAll('tr') ?? []),
        ].reduce(
          ({Table, Headers}, Row, Line) => {
            if (Headers.length) {
              const Table_Cells = [...Row.querySelectorAll('td')]
              let Line_Columns = []
              if (Table_Cells.length < Headers.length) {
                Line_Columns = Table_Cells.map((td, i) => [
                  Headers[i + 1],
                  td?.textContent?.trim(),
                ])
                Line_Columns.push([
                  Headers[0],
                  Table[Line - 2][Headers[0] ?? ''],
                ])
              } else {
                Line_Columns = Table_Cells.map((td, i) => [
                  Headers[i],
                  td?.textContent?.trim(),
                ])
              }
              Table.push(Object.fromEntries(Line_Columns))
            } else {
              Headers = [...Row.querySelectorAll('th')].map(th =>
                th?.textContent?.trim(),
              )
              console.log(Headers)
            }
            return {Table, Headers}
          },
          {
            Table: /** @type {*[]} */ ([]),
            Headers: /** @type {(String | undefined)[]} */ ([]),
          },
        ).Table,
      }))
  }
}
