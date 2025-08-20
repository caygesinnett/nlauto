import N_xml from '../Modules/xml/-main'
import N_workflow from '../Modules/workflow/-main'
import N_workbook from '../Modules/workbook/-main'
import N_util from '../Modules/util/-main'
import N_url from '../Modules/url/-main'
import N_ui_serverWidget from '../Modules/ui_serverWidget/-main'
import N_ui_message from '../Modules/ui_message/-main'
import N_ui_dialog from '../Modules/ui_dialog/-main'
import N_translation from '../Modules/translation/-main'
import N_transaction from '../Modules/transaction/-main'
import N_task_accounting_recognition from '../Modules/task_accounting_recognition/-main'
import N_task from '../Modules/task/-main'
import N_suiteAppInfo from '../Modules/suiteAppInfo/-main'
import N_sftp from '../Modules/sftp/-main'
import N_search from '../Modules/search/-main'
import N_scriptTypes_restlet from '../Modules/scriptTypes_restlet/-main'
import N_runtime from '../Modules/runtime/-main'
import N_render from '../Modules/render/-main'
import N_redirect from '../Modules/redirect/-main'
import N_recordContext from '../Modules/recordContext/-main'
import N_record from '../Modules/record/-main'
import N_query from '../Modules/query/-main'
import N_portlet from '../Modules/portlet/-main'
import N_plugin from '../Modules/plugin/-main'
import N_piremoval from '../Modules/piremoval/-main'
import N_pgp from '../Modules/pgp/-main'
import N_machineTranslation from '../Modules/machineTranslation/-main'
import N_log from '../Modules/log/-main'
import N_llm from '../Modules/llm/-main'
import N_keyControl from '../Modules/keyControl/-main'
import N_https_clientCertificate from '../Modules/https_clientCertificate/-main'
import N_https from '../Modules/https/-main'
import N_http from '../Modules/http/-main'
import N_format_i18n from '../Modules/format_i18n/-main'
import N_format from '../Modules/format/-main'
import N_file from '../Modules/file/-main'
import N_error from '../Modules/error/-main'
import N_encode from '../Modules/encode/-main'
import N_email from '../Modules/email/-main'
import N_dataset from '../Modules/dataset/-main'
import N_currentRecord from '../Modules/currentRecord/-main'
import N_currency from '../Modules/currency/-main'
import N_crypto_random from '../Modules/crypto_random/-main'
import N_crypto_certificate from '../Modules/crypto_certificate/-main'
import N_crypto from '../Modules/crypto/-main'
import N_config from '../Modules/config/-main'
import N_compress from '../Modules/compress/-main'
import N_commerce from '../Modules/commerce/-main'
import N_certificateControl from '../Modules/certificateControl/-main'
import N_cache from '../Modules/cache/-main'
import N_auth from '../Modules/auth/-main'
import N_action from '../Modules/action/-main'

import type Entry_Point from '../Events/entrypoint'

declare global {
  function define<const Importing_Modules extends readonly (keyof NetSuite_Module_Mapping)[]>(
    Modules: Importing_Modules,
    Callback: (
      ...Modules: {
        [Index in keyof Importing_Modules]: NetSuite_Module_Mapping[Importing_Modules[Index]]
      }
    ) => Entry_Point
  ): void
}

type NetSuite_Module_Mapping = {
  'N/action': N_action
  'N/auth': N_auth
  'N/cache': N_cache
  'N/certificateControl': N_certificateControl
  'N/commerce': N_commerce
  'N/compress': N_compress
  'N/config': N_config
  'N/crypto': N_crypto
  'N/crypto/certificate': N_crypto_certificate
  'N/crypto/random': N_crypto_random
  'N/currency': N_currency
  'N/currentRecord': N_currentRecord
  'N/dataset': N_dataset
  'N/email': N_email
  'N/encode': N_encode
  'N/error': N_error
  'N/file': N_file
  'N/format': N_format
  'N/format/i18n': N_format_i18n
  'N/http': N_http
  'N/https': N_https
  'N/https/clientCertificate': N_https_clientCertificate
  'N/keyControl': N_keyControl
  'N/llm': N_llm
  'N/log': N_log
  'N/machineTranslation': N_machineTranslation
  'N/pgp': N_pgp
  'N/piremoval': N_piremoval
  'N/plugin': N_plugin
  'N/portlet': N_portlet
  'N/query': N_query
  'N/record': N_record
  'N/recordContext': N_recordContext
  'N/redirect': N_redirect
  'N/render': N_render
  'N/runtime': N_runtime
  'N/scriptTypes/restlet': N_scriptTypes_restlet
  'N/search': N_search
  'N/sftp': N_sftp
  'N/suiteAppInfo': N_suiteAppInfo
  'N/task': N_task
  'N/task/accounting/recognition': N_task_accounting_recognition
  'N/transaction': N_transaction
  'N/translation': N_translation
  'N/ui/dialog': N_ui_dialog
  'N/ui/message': N_ui_message
  'N/ui/serverWidget': N_ui_serverWidget
  'N/url': N_url
  'N/util': N_util
  'N/workbook': N_workbook
  'N/workflow': N_workflow
  'N/xml': N_xml
}
