import N_encodeEncode from './encode'

export default interface N_encode {
  /** #### *This property does not actually exist on the module* */
  __name__: 'N/encode'

  /**
   * Holds the string values for the supported character set encoding. Use This enum to set the
   * `inputEncoding` and `outputEncoding` parameter values in N/crypto Module or N/encode Module
   */
  Encoding: N_encodeEncode

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
    inputEncoding: N_encodeEncode[keyof N_encodeEncode]
    outputEncoding: N_encodeEncode[keyof N_encodeEncode]
  }): string
}
