import N_https_Enum_Encoding from './Encoding'
import N_https_Object_SecureString from './SecureString/-main'

export default interface N_https_Method_createSecureString {
  (options: {input: string; inputEncoding?: N_https_Enum_Encoding}): N_https_Object_SecureString
}
