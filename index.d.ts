declare module "mockado" {
  export const name: (
    options?:
      | {
          gender?: "male" | "female" | undefined
          type?: "firstName" | "fullName" | "username" | undefined
        }
      | undefined,
  ) => string

  export const email: (
    options?:
      | {
          type?:
            | "gmail.com"
            | "hotmail.com"
            | "outlook.com"
            | "yahoo.com"
            | undefined
          gender?: "male" | "female" | undefined
        }
      | undefined,
  ) => string

  export const password: (
    options?:
      | {
          letters?: boolean | undefined
          capitalLetters?: boolean | undefined
          numbers?: boolean | undefined
          specialCharacters?: boolean | undefined
          length?: number | undefined
        }
      | undefined,
  ) => string

  export const date: (
    options?:
      | {
          format?:
            | "YYYY-MM-DD"
            | "DD/MM/YYYY"
            | "MM/DD/YYYY"
            | "MMM DD, YYYY"
            | "DD MMM YYYY"
            | "YYYY/MM/DD"
            | "YYYY-MM-DD HH:mm:ss"
            | undefined
          start?: Date | undefined
          end?: Date | undefined
        }
      | undefined,
  ) => string

  export const identification: (type?: "CPF" | "SSN" | "SIN") => string

  export const phoneNumber: (
    options?:
      | {
          code?: "EUA" | "BRL" | undefined
        }
      | undefined,
  ) => string

  export const address: (
    options?:
      | "number"
      | "street"
      | "district"
      | "city"
      | "state"
      | "zipCode"
      | undefined,
  ) => string
}
