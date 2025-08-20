import type N_encode_Enum_Encode from './Encode.d.ts'

export default interface N_encode {
  /** #### *This property does not actually exist on the module* */
  __name__: 'N/encode'

  /**
   * Holds the string values for the supported character set encoding. Use This enum to set the
   * `inputEncoding` and `outputEncoding` parameter values in N/crypto Module or N/encode Module
   */
  Encoding: N_encode_Enum_Encode

  /**
   * @Server_Scripts
   * @Governance None
   * @Description
   * Converts a string to another type of encoding and returns the re-encoded string.
   * @param string - The string to encode.
   * @param inputEncoding - The encoding used for the input string.
   * @param outputEncoding - The encoding to apply to the output string.
   */
  convert(options: {
    string: string
    inputEncoding: N_encode_Enum_Encode[keyof N_encode_Enum_Encode]
    outputEncoding: N_encode_Enum_Encode[keyof N_encode_Enum_Encode]
  }): string
}
