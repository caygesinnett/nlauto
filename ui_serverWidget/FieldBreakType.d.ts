export default interface N_ui_serverWidget_Enum_FieldBreakType {
  /** ### This is the default value for field break type. */
  NONE: 'NONE'
  /** ### This value moves the field into a new column. Additionally, it disables automatic field balancing if set on any field. */
  STARTCOL: 'STARTCOL'
  /** ### This value places a field located outside of a field group on a new row. This value only works on fields with a Field Layout Type set to OUTSIDE, OUTSIDEABOVE or OUTSIDEBELOW. */
  STARTROW: 'STARTROW'
}
