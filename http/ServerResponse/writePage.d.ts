import type N_ui_serverWidget_Object_Assistant from '../../ui_serverWidget/Assistant/-main.d.ts'
import type N_ui_serverWidget_Object_Form from '../../ui_serverWidget/Form/-main.d.ts'
import type N_ui_serverWidget_Object_List from '../../ui_serverWidget/List/-main.d.ts'

export default interface N_http_Object_ServerResponse_Method_writePage {
  (options: {
    pageObject:
      | N_ui_serverWidget_Object_Assistant
      | N_ui_serverWidget_Object_Form
      | N_ui_serverWidget_Object_List
  }): void
}
