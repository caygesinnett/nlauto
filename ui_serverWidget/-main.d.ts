import type N_ui_serverWidget_Enum_AssistantSubmitAction from './AssistantSubmitAction.d.ts'
import type N_ui_serverWidget_Enum_FieldBreakType from './FieldBreakType.d.ts'
import type N_ui_serverWidget_Enum_FieldDisplayType from './FieldDisplayType.d.ts'
import type N_ui_serverWidget_Enum_FieldLayoutType from './FieldLayoutType.d.ts'
import type N_ui_serverWidget_Enum_FieldType from './FieldType.d.ts'
import type N_ui_serverWidget_Enum_FormPageLinkType from './FormPageLinkType.d.ts'
import type N_ui_serverWidget_Enum_LayoutJustification from './LayoutJustification.d.ts'
import type N_ui_serverWidget_Enum_ListStyle from './ListStyle.d.ts'
import type N_ui_serverWidget_Enum_SublistDisplayType from './SublistDisplayType.d.ts'
import type N_ui_serverWidget_Enum_SublistType from './SublistType.d.ts'

import type N_ui_serverWidget_Method_createAssistant from './createAssistant.d.ts'
import type N_ui_serverWidget_Method_createForm from './createForm.d.ts'
import type N_ui_serverWidget_Method_createList from './createList.d.ts'

export default interface N_ui_serverWidget {
  AssistantSubmitAction: N_ui_serverWidget_Enum_AssistantSubmitAction
  FieldBreakType: N_ui_serverWidget_Enum_FieldBreakType
  FieldDisplayType: N_ui_serverWidget_Enum_FieldDisplayType
  FieldLayoutType: N_ui_serverWidget_Enum_FieldLayoutType
  FieldType: N_ui_serverWidget_Enum_FieldType
  FormPageLinkType: N_ui_serverWidget_Enum_FormPageLinkType
  LayoutJustification: N_ui_serverWidget_Enum_LayoutJustification
  ListStyle: N_ui_serverWidget_Enum_ListStyle
  SublistDisplayType: N_ui_serverWidget_Enum_SublistDisplayType
  SublistType: N_ui_serverWidget_Enum_SublistType

  createAssistant: N_ui_serverWidget_Method_createAssistant
  createForm: N_ui_serverWidget_Method_createForm
  createList: N_ui_serverWidget_Method_createList
}
