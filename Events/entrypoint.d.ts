import type N_http_Object_ServerRequest from '../Modules/http/ServerRequest/-main'
import type N_http_Object_ServerResponse from '../Modules/http/ServerResponse/-main'

export default interface Entry_Point {
  onRequest?: (context: Suitelet_Context) => Promise<void> | void
  execute?: (context: {type: InvocationType[keyof InvocationType]}) => Promise<void> | void
  getInputData?: (inputContext: inputContext) => any
  map?: (mapContext: mapContext) => Promise<void> | void
  reduce?: (reduceContext: reduceContext) => Promise<void> | void
  summary?: (summaryContext: summaryContext) => Promise<void> | void
}

interface Suitelet_Context {
  request: N_http_Object_ServerRequest
  response: N_http_Object_ServerResponse
}

interface InvocationType {
  /** ### The normal execution according to the deployment options specified in the UI. */
  SCHEDULED: 'SCHEDULED'
  /**
   * ### The script is executed from a call in a script (using ScheduledScriptTask.submit()).
   * #### `NOTE:` *The scheduled script must have a status of Not Scheduled on the Script Deployment page.*
   */
  ON_DEMAND: 'ON_DEMAND'
  /** ### The script is executed from the UI (the Save & Execute button has been clicked). */
  USER_INTERFACE: 'USER_INTERFACE'
  /** ### The script re-executed automatically following an aborted execution (system went down during execution). */
  ABORTED: 'ABORTED'
  /** ### The script is executed automatically following downtime during which the script should have been executed. */
  SKIPPED: 'SKIPPED'
}

interface inputContext {
  isRestarted: boolean
  ObjectRef: {id: string | number; type: string}
}

interface mapContext {
  isRestarted: boolean
  executionNo: number
  errors(): {
    each(iteratorFunction: (key?: string, error?: string, executionNo?: number) => boolean): void
  }
  key: string
  value: string
  write(options: {key: string; value: string}): void
}

interface reduceContext {
  isRestarted: boolean
  executionNo: number
  errors(): {
    each(iteratorFunction: (key?: string, error?: string, executionNo?: number) => boolean): void
  }
  key: string
  values: string[]
  write(options: {key: string; value: string}): void
}

interface summaryContext {
  isRestarted: boolean
  concurrency: number
  dateCreated: Date
  seconds: number
  usage: number
  yields: number
  inputSummary: {
    dateCreated: Date
    error: string
    seconds: number
    usage: number
  }
  mapSummary: {
    concurrency: number
    dateCreated: Date
    errors(): {
      each(iteratorFunction: (key?: string, error?: string, executionNo?: number) => boolean): void
    }
    keys(): {
      each(
        iteratorFunction: (
          key?: string,
          executionCount?: number,
          completionState?: 'COMPLETE' | 'FAILED' | 'PENDING'
        ) => boolean
      ): void
    }
    seconds: number
    usage: number
    yields: number
  }
  reduceSummary: {
    concurrency: number
    dateCreated: Date
    errors(): {
      each(iteratorFunction: (key?: string, error?: string, executionNo?: number) => boolean): void
    }
    keys(): {
      each(
        iteratorFunction: (
          key?: string,
          executionCount?: number,
          completionState?: 'COMPLETE' | 'FAILED' | 'PENDING'
        ) => boolean
      ): void
    }
    seconds: number
    usage: number
    yields: number
  }
  output(): {
    each(iteratorFunction: (key: string, error: string, executionNo: number) => boolean): void
  }
}
