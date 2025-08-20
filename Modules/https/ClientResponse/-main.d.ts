export default interface N_https_Object_ClientResponse {
  type: 'https.ClientResponse'
  body: string
  code: number
  headers: Record<string, string>
}
