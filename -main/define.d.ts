import N_encode from '../encode/-main'
import N_https from '../https/-main'
import N_record from '../record/-main'
import N_runtime from '../runtime/-main'
import N_search from '../search/-main'

import Entry_Point from './entrypoint'

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
}
