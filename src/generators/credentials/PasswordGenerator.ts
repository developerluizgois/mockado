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
      specialCharacters: "!@#$%^&*()[]{}|;:,.<>?=-_+",
    }

    options = { ...defaultOptions, ...options }

    let availableCharset = ""

    if (options.letters) availableCharset += charset.letters
    if (options.capitalLetters) availableCharset += charset.capitalLetters
    if (options.numbers) availableCharset += charset.numbers
    if (options.specialCharacters) availableCharset += charset.specialCharacters

    let password = ""

    // Adiciona um caractere minúsculo, se letters for true e capitalLetters for false
    if (options.letters && !options.capitalLetters) {
      password += charset.letters.charAt(
        Math.floor(Math.random() * charset.letters.length),
      )
    }

    // Adiciona um caractere maiúsculo, se capitalLetters for true
    if (options.capitalLetters) {
      password += charset.capitalLetters.charAt(
        Math.floor(Math.random() * charset.capitalLetters.length),
      )
    }

    // Adiciona um número, se numbers for true
    if (options.numbers) {
      password += charset.numbers.charAt(
        Math.floor(Math.random() * charset.numbers.length),
      )
    }

    // Adiciona um caractere especial, se specialCharacters for true
    if (options.specialCharacters) {
      password += charset.specialCharacters.charAt(
        Math.floor(Math.random() * charset.specialCharacters.length),
      )
    }

    // Preenche o restante da senha com caracteres aleatórios
    for (
      let i = options.letters && !options.capitalLetters ? 4 : 3;
      i < options.length!;
      i++
    ) {
      password += availableCharset.charAt(
        Math.floor(Math.random() * availableCharset.length),
      )
    }

    // Embaralha a senha para garantir a aleatoriedade
    password = PasswordGenerator.shuffleString(password)

    return password
  }

  // Função para embaralhar uma string
  private static shuffleString(str: string): string {
    const array = str.split("")
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array.join("")
  }
}
