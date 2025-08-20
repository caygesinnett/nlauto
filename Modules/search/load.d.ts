import N_search_Object_Search from './Search/-main'
import N_search_Enum_Type from './Type'

export default interface N_search_Method_load {
  (
    options:
      | {
          id: string | number
          type: Standalone_Search_Type
        }
      | {
          id: string | number
          type?: Exclude<N_search_Enum_Type[keyof N_search_Enum_Type], Standalone_Search_Type>
        }
  ): N_search_Object_Search
  promise(
    options:
      | {
          id: string | number
          type: Standalone_Search_Type
        }
      | {
          id: string | number
          type?: Exclude<N_search_Enum_Type[keyof N_search_Enum_Type], Standalone_Search_Type>
        }
  ): Promise<N_search_Object_Search>
}

type Standalone_Search_Type =
  | 'DeletedRecord'
  | 'EndToEndTime'
  | 'ExpenseAmortPlanAndSchedule'
  | 'RevRecPlanAndSchedule'
  | 'GlLinesAuditLog'
  | 'Crosschargeable'
  | 'FinRptAggregateFR'
  | 'BillingAccountBillCycle'
  | 'BillingAccountBillRequest'
  | 'BinItemBalance'
  | 'PaymentEvent'
  | 'Permission'
  | 'GatewayNotification'
  | 'TimeApproval'
  | 'RecentRecord'
  | 'Role'
  | 'SavedSearch'
  | 'ShoppingCart'
  | 'SubscriptionRenewalHistory'
  | 'SuiteScriptDetail'
  | 'SupplyChainSnapshotDetails'
  | 'SystemNote'
  | 'TaxDetail'
  | 'TimesheetApproval'
  | 'Uber'
  | 'ResAllocationTimeOffConflict'
  | 'ComSearchOneWaySyn'
  | 'ComSearchGroupSyn'
  | 'Installment'
  | 'InventoryBalance'
  | 'InventoryNumberBin'
  | 'InventoryNumberItem'
  | 'InventoryStatusLocation'
  | 'InvtNumberItemBalance'
