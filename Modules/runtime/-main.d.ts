import N_runtime_Enum_EnvType from './EnvType'
import N_runtime_Enum_ContextType from './ContextType'
import N_runtime_Enum_Permission from './Permission'

import N_runtime_Method_getCurrentScript from './getCurrentScript'
import N_runtime_Method_getCurrentSession from './getCurrentSession'
import N_runtime_Method_getCurrentUser from './getCurrentUser'
import N_runtime_Method_isFeatureInEffect from './isFeatureInEffect'

export default interface N_runtime {
  /** This property does not actually exist on the module */
  __name__: 'N/runtime'

  accountId: string
  country: string
  envType: N_runtime_Enum_EnvType[keyof N_runtime_Enum_EnvType]
  executionContext: N_runtime_Enum_ContextType[keyof N_runtime_Enum_ContextType]
  /** The number of processors available */
  processorCount: number
  /** The number of scheduled script queues available */
  queueCount: number
  /** @example '2023.2' */
  version: string

  ContextType: N_runtime_Enum_ContextType
  EnvType: N_runtime_Enum_EnvType
  Permission: N_runtime_Enum_Permission

  getCurrentScript: N_runtime_Method_getCurrentScript
  getCurrentSession: N_runtime_Method_getCurrentSession
  getCurrentUser: N_runtime_Method_getCurrentUser
  isFeatureInEffect: N_runtime_Method_isFeatureInEffect
}
