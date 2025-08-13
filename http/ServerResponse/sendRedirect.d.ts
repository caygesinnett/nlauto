import type N_http_Enum_RedirectType from '../RedirectType.d.ts'

export default interface N_http_Object_ServerResponse_Method_sendRedirect {
  (options: {
    identifier: number | string
    type: N_http_Enum_RedirectType[keyof N_http_Enum_RedirectType]
    editMode?: boolean
    id?: number | string
    parameters?: Record<string, boolean | number | string>
  }): void
}
