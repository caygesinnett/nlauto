import N_https_Object_ClientResponse from './ClientResponse/-main'
import N_https_Object_SecureString from './SecureString/-main'

export default interface N_https_Method_post {
  (options: {
    body: any
    url: string | N_https_Object_SecureString
    credentials?: string[]
    headers?: Record<string, string | N_https_Object_SecureString>
  }): N_https_Object_ClientResponse
  promise(options: {
    body: any
    url: string | N_https_Object_SecureString
    credentials?: string[]
    headers?: Record<string, string | N_https_Object_SecureString>
  }): Promise<N_https_Object_ClientResponse>
}
