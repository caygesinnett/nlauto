export default interface N_ui_serverWidget_Enum_SublistType {
  /**
   * ### With an inline editor sublist, a new line is displayed at the bottom of the list after existing lines. To add a line, a user working in the UI clicks inside the new line and adds a value to each column as appropriate. Examples of this style include the Item sublist on the sales order record and the Expense sublist on the expense report record.
   */
  INLINEEDITOR: 'INLINEEDITOR'
  /**
   * ### With an editor sublist, a user in the UI adds a new line by working with fields that are displayed above the existing sublist lines. This style is not common on standard NetSuite record types.
   */
  EDITOR: 'EDITOR'
  /**
   * ### This type of sublist has a fixed number of lines. You can update an existing line, but you cannot add lines to it.
   * #### `NOTE:` *To make a field within a LIST type sublist editable, use Field.updateDisplayType(options) and the enum serverWidget.FieldDisplayType to update the field display type to ENTRY.*
   */
  LIST: 'LIST'
  /**
   * ### This type of sublist is read-only. It cannot be edited in the UI, and it is not available for scripting.
   */
  STATICLIST: 'STATICLIST'
}
