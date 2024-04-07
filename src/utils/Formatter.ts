export class Formatter {
  static formatString(
    inputString: string,
    options?: {
      spaces?: boolean
      numbers?: boolean
      specialCharacters?: boolean
      uppercaseLetters?: boolean
    },
  ): string {
    let formattedString = inputString
    if (!options) {
      options = {
        spaces: false,
        numbers: false,
        specialCharacters: false,
        uppercaseLetters: false,
      }
    }

    if (options.spaces === false) {
      formattedString = formattedString.replace(/\s/g, "")
    }
    if (options.numbers === false) {
      formattedString = formattedString.replace(/[0-9]/g, "")
    }
    if (options.specialCharacters === false) {
      formattedString = formattedString.replace(/[^\w\s]/gi, "")
    }
    if (options.uppercaseLetters === false) {
      formattedString = formattedString.replace(/[A-Z]/g, (letter) =>
        letter.toLowerCase(),
      )
    }

    return formattedString
  }
}
