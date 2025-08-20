import N_search_Method_create from './create'
import N_search_Method_createColumn from './createColumn'
import N_search_Method_createFilter from './createFilter'
import N_search_Method_createSetting from './createSetting'
import N_search_Method_delete from './delete'
import N_search_Method_duplicates from './duplicates'
import N_search_Method_global from './global'
import N_search_Method_load from './load'
import N_search_Method_lookupFields from './lookupFields'
import N_search_Enum_Operator from './Operator'
import N_search_Enum_Sort from './Sort'
import N_search_Enum_Summary from './Summary'
import N_search_Enum_Type from './Type'

export default interface N_search {
  /** This property does not actually exist on the module */
  __name__: 'N/search'

  Operator: N_search_Enum_Operator
  Sort: N_search_Enum_Sort
  Summary: N_search_Enum_Summary
  Type: N_search_Enum_Type

  create: N_search_Method_create
  createColumn: N_search_Method_createColumn
  createFilter: N_search_Method_createFilter
  createSetting: N_search_Method_createSetting
  delete: N_search_Method_delete
  duplicates: N_search_Method_duplicates
  global: N_search_Method_global
  load: N_search_Method_load
  lookupFields: N_search_Method_lookupFields
}
