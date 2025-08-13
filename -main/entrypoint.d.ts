import type N_http_Object_ServerRequest from '../http/ServerRequest/-main.d.ts'
import type N_http_Object_ServerResponse from '../http/ServerResponse/-main.d.ts'

export default interface Entry_Point {
  onRequest?: (context: Suitelet_Context) => Promise<void> | void
  execute?: (context: {type: InvocationType[keyof InvocationType]}) => Promise<void> | void
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
