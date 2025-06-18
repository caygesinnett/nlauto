import Puppeteer from 'puppeteer'

const SuiteScript_Modules_Page_Url =
  'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_4220488571.html'
/**
 * @description Gets each module's name and link from the SuiteScript modules page
 * @returns {Promise<{Name: String, Link: String}[]>}
 */
export default async function Get_Modules() {
  const Browser = await Puppeteer.launch()
  const Page = await Browser.newPage()
  await Page.goto(SuiteScript_Modules_Page_Url)
  const Modules = await Page.$eval('.table-responsive', table => {
    const trs = [...table.querySelectorAll('tr')]
    const Unfiltered_Modules = trs.map(tr => {
      const td = tr.querySelector('td')
      const Name = td?.textContent?.trim().replace(/ Module/, '')
      const Link = tr.querySelector('a')?.href
      return {Name, Link}
    })
    /**
     * @template T - Interface
     * @typedef {{[K in keyof T]: NonNullable<T[K]>}} Defined
     */
    const Modules =
      /** @type {Defined<typeof Unfiltered_Modules[Number]>[]} */ (
        Unfiltered_Modules.filter(({Name, Link}) => {
          if (!Name) return false
          else if (!Link) return false
          else if (Name[0] != 'N') return false
          else if (Name == 'N/sso') return false
          else return true
        })
      )
    return Modules
  })
  await Browser.close()
  return Modules
}
