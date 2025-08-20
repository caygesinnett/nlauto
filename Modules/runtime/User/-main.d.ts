import N_runtime_Object_User_Method_getPermission from './getPermission'
import N_runtime_Object_User_Method_getPreference from './getPreference'

export default interface N_runtime_Object_User {
  contact: number
  department: number
  email: string
  id: number
  location: number
  name: string
  role: number
  roleCenter: string
  roleId: string
  subsidiary: number

  getPermission: N_runtime_Object_User_Method_getPermission
  getPreference: N_runtime_Object_User_Method_getPreference
}
