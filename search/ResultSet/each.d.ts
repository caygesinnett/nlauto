import N_search_Object_Result from '../Result/-main'

export default interface N_search_Object_ResultSet_Method_each {
  (callback: (result: N_search_Object_Result) => boolean): void
  promise(callback: (result: N_search_Object_Result) => boolean): Promise<void>
}
