import N_search_Enum_Type from './Type'

export default interface N_search_Method_lookupFields {
  <const Columns extends string | string[]>(options: {
    type: N_search_Enum_Type[keyof N_search_Enum_Type]
    id: string | number
    columns: Columns
  }): Columns extends string ? Record<Columns, unknown> : Record<Columns[number], unknown>
  promise<const Columns extends string | string[]>(options: {
    type: N_search_Enum_Type[keyof N_search_Enum_Type]
    id: string | number
    columns: Columns
  }): Columns extends string
    ? Promise<Record<Columns, unknown>>
    : Promise<Record<Columns[number], unknown>>
}
