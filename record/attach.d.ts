import N_record_Record from './record'

export default interface N_record_attach {
  (options: {
    record:
      | {
          type: string
          id: number | string
        }
      | N_record_Record
    to:
      | {
          type: string
          id: number | string
        }
      | N_record_Record
    attributes?: Record<string, any>
  }): void
  promise(options: {
    record:
      | {
          type: string
          id: number | string
        }
      | N_record_Record
    to:
      | {
          type: string
          id: number | string
        }
      | N_record_Record
    attributes?: Record<string, any>
  }): Promise<void>
}
