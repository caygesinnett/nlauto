import type N_https_Method_createSecureString from './createSecureString'
import type N_https_Method_delete from './delete'
import type N_https_Method_get from './get'
import type N_https_Method_post from './post'
import type N_https_Method_put from './put'

export default interface N_https {
  /** This property does not actually exist on the module */
  __name__: 'N/https'

  createSecureString: N_https_Method_createSecureString
  delete: N_https_Method_delete
  get: N_https_Method_get
  post: N_https_Method_post
  put: N_https_Method_put
}
