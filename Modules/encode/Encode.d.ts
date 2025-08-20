export default interface N_encode_Enum_Encode {
  UTF_8: 'UTF_8'
  BASE_16: 'BASE_16'
  BASE_32: 'BASE_32'
  BASE_64: 'BASE_64'
  /**
   * BASE_64_URL_SAFE uses a different character set compared to BASE64, where the following properties apply:
   * - \+ is replaced with -
   * - / is replaced with _
   * - Padding is still present and represented by character =
   * - Use a standard javascript String replace operation to remove padding or replace it with URL-encoded form %3D.
   */
  BASE_64_URL_SAFE: 'BASE_64_URL_SAFE'
  HEX: 'HEX'
}
