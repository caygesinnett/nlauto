export default interface N_ui_serverWidget_Enum_FieldDisplayType {
  /** ### Prevents a user from changing the field */
  DISABLED: 'DISABLED'
  /** ### The sublist field appears as a data entry input field (for a select field without a checkbox) */
  ENTRY: 'ENTRY'
  /** ### The field on the form is hidden */
  HIDDEN: 'HIDDEN'
  /** ### The field appears as inline text */
  INLINE: 'INLINE'
  /** ### The field is not displayed on the form but can be made visible (for example, by an attached client script upon a field change) */
  NODISPLAY: 'NODISPLAY'
  /** ### The field appears as a normal input field (for non-sublist fields) */
  NORMAL: 'NORMAL'
  /** ### The field is disabled but it is still selectable and scrollable (for textarea fields) */
  READONLY: 'READONLY'
}
