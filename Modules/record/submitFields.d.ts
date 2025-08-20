export default interface N_record_Method_submitFields {
  (options: {
    type: string
    id: number | string
    values: Record<string, any>
    options?: {
      enableSourcing?: boolean
      ignoreMandatoryFields?: boolean
    }
  }): number
  promise(options: {
    type: string
    id: number | string
    values: Record<string, any>
    options?: {
      enableSourcing?: boolean
      ignoreMandatoryFields?: boolean
    }
  }): Promise<number>
}
