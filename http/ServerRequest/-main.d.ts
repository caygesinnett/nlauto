import type N_http_Enum_Method from '../Method.d.ts'
import type N_http_Object_ServerRequest_Method_getLineCount from './getLineCount.d.ts'
import type N_http_Object_ServerRequest_Method_getSublistValue from './getSublistValue.d.ts'

export default interface N_http_Object_ServerRequest {
  readonly body: string
  readonly files: unknown
  readonly headers: unknown
  readonly clientIpAddress: string
  readonly method: N_http_Enum_Method[keyof N_http_Enum_Method]
  readonly parameters: Record<string, string>
  readonly url: string

  /**
   * ### {@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314815897.html|🔗ServerRequest.getLineCount(options)🔗}
   * #### `NOTE:` *Can only be used when a form is submitted on a POST request and has a sublist.*
   * ___
   * @Governance 0
   * @ServerScripts
   * @returns `Number`
   * @param group The sublist script id.
   * @throws
   * Error Code|Mesage|Thrown If
   * -|-|-
   * SSS_MISSING_REQD_ARGUMENT|-Missing a required argument: {param name}|-The options.group parameter is not specified.
   * ___
   * @example Server_Request.getLineCount({group: 'custpage_sublistid'})
   */
  getLineCount: N_http_Object_ServerRequest_Method_getLineCount

  /**
   * ### {@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4314828231.html|🔗ServerRequest.getSublistValue(options)🔗}
   * #### `NOTE:` *Can only be used when a form is submitted on a POST request and has a sublist.*
   * ___
   * @Governance 0
   * @ServerScripts
   * @returns `String`
   * @param group The sublist script id.
   * @param line
   * @param name The script id of the field.
   * @throws
   * Error Code|Mesage|Thrown If
   * -|-|-
   * SSS_MISSING_REQD_ARGUMENT|-Missing a required argument: {param name}|-The options.group or options.line parameter is not specified.
   * ___
   * @example Server_Request.getSublistValue({group: 'item', name: 'amount', line: 2})
   */
  getSublistValue: N_http_Object_ServerRequest_Method_getSublistValue
}
