export default class PasswordGenerator {
  static generateRandomPassword(options?: {
    letters?: boolean
    capitalLetters?: boolean
    numbers?: boolean
    specialCharacters?: boolean
    length?: number
  }): string {
    const defaultLength = 8
    const defaultOptions = {
      letters: true,
      capitalLetters: true,
      numbers: true,
      specialCharacters: true,
      length: defaultLength,
    }

    const charset = {
      letters: "abcdefghijklmnopqrstuvwxyz",
      capitalLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      specialCharacters: "`˜!@#$%ˆ&*()_-=+[{]}|;:,./?",
    }

    options = { ...defaultOptions, ...options }

    let availableCharset = ""

    if (options.letters) availableCharset += charset.letters
    if (options.capitalLetters) availableCharset += charset.capitalLetters
    if (options.numbers) availableCharset += charset.numbers
    if (options.specialCharacters) availableCharset += charset.specialCharacters

    let password = ""

    for (let i = 0; i < options.length!; i++) {
      password += availableCharset.charAt(
        Math.floor(Math.random() * availableCharset.length),
      )
    }

    return password
  }
}
