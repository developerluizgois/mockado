export default class PasswordGenerator {
  static generateRandomPassword(options?: {
    letters?: boolean
    capitalLetters?: boolean
    numbers?: boolean
    specialCharacters?: boolean
    length?: number
  }): string {
    const defaultOptions = {
      letters: true,
      capitalLetters: true,
      numbers: true,
      specialCharacters: true,
      length: 8,
    }

    const charset = {
      letters: "abcdefghijklmnopqrstuvwxyz",
      capitalLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      specialCharacters: "@$!%*?;/&",
    }

    options = { ...defaultOptions, ...options }

    let availableCharset = ""

    if (options.letters) availableCharset += charset.letters
    if (options.capitalLetters) availableCharset += charset.capitalLetters
    if (options.numbers) availableCharset += charset.numbers
    if (options.specialCharacters) availableCharset += charset.specialCharacters

    let password = ""

    // Add a lowercase character, if letters is true and capitalLetters is false
    if (options.letters && !options.capitalLetters) {
      password += charset.letters.charAt(
        Math.floor(Math.random() * charset.letters.length),
      )
    }

    // Add an uppercase character, if capitalLetters is true
    if (options.capitalLetters) {
      password += charset.capitalLetters.charAt(
        Math.floor(Math.random() * charset.capitalLetters.length),
      )
    }

    // Add a number, if numbers is true
    if (options.numbers) {
      password += charset.numbers.charAt(
        Math.floor(Math.random() * charset.numbers.length),
      )
    }

    // Add a special character, if specialCharacters is true
    if (options.specialCharacters) {
      password += charset.specialCharacters.charAt(
        Math.floor(Math.random() * charset.specialCharacters.length),
      )
    }

    // Fill the rest of the password with random characters
    for (let i = password.length; i < options.length!; i++) {
      password += availableCharset.charAt(
        Math.floor(Math.random() * availableCharset.length),
      )
    }

    // Shuffle the password to ensure randomness
    password = PasswordGenerator.shuffleString(password)

    return password
  }

  // Function to shuffle a string
  private static shuffleString(str: string): string {
    const array = str.split("")
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array.join("")
  }
}
