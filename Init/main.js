import Puppeteer from 'puppeteer'
import fs from 'fs/promises'
import Get_Modules from './Get_Modules.js'
import Get_Module from './Get_Module.js'
//
;(async function Main() {
  const Modules = await Get_Modules()
  await fs.writeFile('Modules.json', JSON.stringify(Modules))
  //
  let Module_Infos = []
  for (let Index = 0; Index < Modules.length; Index += 1) {
    const Module = Modules[Index]
    const Module_Info = await Get_Module(Module)
    Module_Infos.push(Module_Info)
  }
  await fs.writeFile('ModuleInfo.json', JSON.stringify(Module_Infos))
})()
