import N_record_Type from './type'
import N_record_Record from './record'
import N_record_attach from './attach'

export default interface N_record {
  /** #### *This property does not actually exist on the module* */
  __name__: 'N/record'

  Type: N_record_Type

  /**
   * {@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4267284169.html|NetSuite Reference - record.attach(options)}
   * ### Attaches a record to another record.
   * #### `NOTE:` *The record to attach must be active.*
   * ___
   * @Governance 10
   * @ServerAndClientScripts
   * @returns `void`
   * @param record **required** - The record to attach.
   * @param record.type record.Type
   * @param record.id number or string
   * @param to **required** - The record that is being attached to.
   * @param to.type record.Type
   * @param to.id number or string
   * @throws
   * Error Code | Thrown If
   * -|-
   * `SSS_MISSING_REQD_ARGUMENT` | A required argument is missing or undefined.
   * ___
   * @example
   *   record.attach({
   *     record: {type: 'contact', id: 2},
   *     to: {type: 'customer', id: 3},
   *     attributes: {role: 3},
   *   })
   */
  attach: N_record_attach
}
