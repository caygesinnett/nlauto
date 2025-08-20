import N_runtime_Object_Script_Method_getParameter from './getParameter'
import N_runtime_Object_Script_Method_getRemainingUsage from './getRemainingUsage'

export default interface N_runtime_Object_Script {
  apiVersion: string
  bundleIds: string[]
  deploymentId: string
  id: string
  logLevel: string
  percentComplete: number

  getParameter: N_runtime_Object_Script_Method_getParameter
  getRemainingUsage: N_runtime_Object_Script_Method_getRemainingUsage
}
