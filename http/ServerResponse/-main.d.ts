import type N_http_Object_ServerResponse_Method_addHeader from './addHeader.d.ts'
import type N_http_Object_ServerResponse_Method_getHeader from './getHeader.d.ts'
import type N_http_Object_ServerResponse_Method_renderPdf from './renderPdf.d.ts'
import type N_http_Object_ServerResponse_Method_sendRedirect from './sendRedirect.d.ts'
import type N_http_Object_ServerResponse_Method_setCdnCacheable from './setCdnCacheable.d.ts'
import type N_http_Object_ServerResponse_Method_setHeader from './setHeader.d.ts'
import type N_http_Object_ServerResponse_Method_write from './write.d.ts'
import type N_http_Object_ServerResponse_Method_writeFile from './writeFile.d.ts'
import type N_http_Object_ServerResponse_Method_writeLine from './writeLine.d.ts'
import type N_http_Object_ServerResponse_Method_writePage from './writePage.d.ts'

export default interface N_http_Object_ServerResponse {
  headers: unknown

  addHeader: N_http_Object_ServerResponse_Method_addHeader
  getHeader: N_http_Object_ServerResponse_Method_getHeader
  renderPdf: N_http_Object_ServerResponse_Method_renderPdf
  sendRedirect: N_http_Object_ServerResponse_Method_sendRedirect
  setCdnCacheable: N_http_Object_ServerResponse_Method_setCdnCacheable
  setHeader: N_http_Object_ServerResponse_Method_setHeader
  write: N_http_Object_ServerResponse_Method_write
  writeFile: N_http_Object_ServerResponse_Method_writeFile
  writeLine: N_http_Object_ServerResponse_Method_writeLine
  writePage: N_http_Object_ServerResponse_Method_writePage
}
