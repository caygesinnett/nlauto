import type N_encode from '../encode/-main.d.ts'
import type N_https from '../https/-main.d.ts'
import type N_record from '../record/-main.d.ts'
import type N_runtime from '../runtime/-main.d.ts'
import type N_search from '../search/-main.d.ts'
import type N_ui_serverWidget from '../ui_serverWidget/-main.d.ts'

import type Entry_Point from './entrypoint.d.ts'

declare global {
  function define<const Importing_Modules extends readonly (keyof NetSuite_Module_Mapping)[]>(
    Modules: Importing_Modules,
    Callback: (
      ...Modules: {
        [Index in keyof Importing_Modules]: NetSuite_Module_Mapping[Importing_Modules[Index]]
      }
    ) => Entry_Point
  ): void
}

type NetSuite_Module_Mapping = {
  'N/encode': N_encode
  'N/https': N_https
  'N/record': N_record
  'N/runtime': N_runtime
  'N/search': N_search
  'N/ui/serverWidget': N_ui_serverWidget
}
