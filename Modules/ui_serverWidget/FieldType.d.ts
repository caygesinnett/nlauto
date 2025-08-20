export default interface N_ui_serverWidget_Enum_FieldType {
  /** #### `NOTE:` *Not supported with List.addColumn(options)* */
  CHECKBOX: 'CHECKBOX'
  CURRENCY: 'CURRENCY'
  DATE: 'DATE'
  /**
   * #### `NOTE:` *The DATETIME field type is not supported with addField methods, you must specify DATETIMETZ.*
   * #### `NOTE:` *Not supported with Sublist.addField(options)*
   * #### `NOTE:` *Not supported with List.addColumn(options)*
   */
  DATETIME: 'DATETIME'
  /** #### `NOTE:` *Not supported with List.addColumn(options)* */
  DATETIMETZ: 'DATETIMETZ'
  EMAIL: 'EMAIL'
  /**
   * ### The FILE field type is available only for Suitelets and will appear on the main tab of the Suitelet page.
   * #### `NOTE:` *FILE fields cannot be added to tabs, subtabs, sublists, or field groups and are not allowed on existing pages. It is not supported with List.addColumn(options).*
   * #### `NOTE:` *Not supported with Sublist.addField(options)*
   * #### `NOTE:` *Not supported with List.addColumn(options)*
   */
  FILE: 'FILE'
  FLOAT: 'FLOAT'
  /** #### `NOTE:` *Not supported with Sublist.addField(options)* */
  /** #### `NOTE:` *Not supported with List.addColumn(options)* */
  HELP: 'HELP'
  /**
   * ### All field types that work with text handle input as plain text, except for the INLINEHTML field type. HTML input is supported only in the INLINEHTML field type.
   * #### The INLINEHTML field type should be considered as a 'write-only' type of field used to add a field on a form. The INLINEHTML field type does not support labels. The label parameter is required for all field types, but the UI does not display the labels specified for INLINEHTML fields. If you want to display an INLINEHTML field with a label, add a separate custom LABEL field.
   * #### `NOTE:` *Not supported with Sublist.addField(options)*
   * #### `NOTE:` *Not supported with List.addColumn(options)*
   */
  INLINEHTML: 'INLINEHTML'
  INTEGER: 'INTEGER'
  /** #### `NOTE:` *The IMAGE field type is available only for fields that appear on lists, static list sublists or forms.* */
  IMAGE: 'IMAGE'
  /**
   * #### `NOTE:` *Not supported with Sublist.addField(options)*
   * #### `NOTE:` *Not supported with List.addColumn(options)*
   */
  LABEL: 'LABEL'
  /** #### `NOTE:` *Not supported with Sublist.addField(options)* */
  LONGTEXT: 'LONGTEXT'
  /**
   * #### `NOTE:` *Not supported with Sublist.addField(options)*
   * #### `NOTE:` *Not supported with List.addColumn(options)*
   */
  MULTISELECT: 'MULTISELECT'
  PASSWORD: 'PASSWORD'
  PERCENT: 'PERCENT'
  PHONE: 'PHONE'
  /** #### `NOTE:` *Not supported with List.addColumn(options)* */
  SELECT: 'SELECT'
  /**
   * ### Radio buttons that are inside one container are exclusive. The method addField on form has an optional parameter container. For an example, see FieldGroup.label.
   * #### `NOTE:` *Not supported with Sublist.addField(options)*
   * #### `NOTE:` *Not supported with List.addColumn(options)*
   */
  RADIO: 'RADIO'
  /** #### `NOTE:` *Not supported with Sublist.addField(options)* */
  RICHTEXT: 'RICHTEXT'
  TEXT: 'TEXT'
  TEXTAREA: 'TEXTAREA'
  TIMEOFDAY: 'TIMEOFDAY'
  URL: 'URL'
}
