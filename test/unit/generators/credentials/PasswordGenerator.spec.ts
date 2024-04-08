import PasswordGenerator from "../../../../src/generators/credentials/PasswordGenerator"
import {
  regexPasswordDefault,
  regexPasswordWithCapitalLetters,
  regexPasswordWithLetters,
  regexPasswordWithNumbers,
  regexPasswordWithSpecialCharacters,
} from "../../../../src/utils/Regex"

describe("Test function to generate random passwords", () => {
  it("should generate a password with default options", () => {
    const password = PasswordGenerator.generateRandomPassword()
    expect(password.length).toBe(8)
    expect(password).toMatch(regexPasswordDefault)
  })

  it("should generate a password with specified length", () => {
    const passwordLength = 12
    const password = PasswordGenerator.generateRandomPassword({
      length: passwordLength,
    })
    expect(password.length).toBe(passwordLength)
  })

  it("should generate a password with only letters", () => {
    const password = PasswordGenerator.generateRandomPassword({
      letters: true,
      capitalLetters: false,
      numbers: false,
      specialCharacters: false,
    })
    expect(password).toMatch(regexPasswordWithLetters)
  })

  it("should generate a password with only capital letters", () => {
    const password = PasswordGenerator.generateRandomPassword({
      letters: false,
      capitalLetters: true,
      numbers: false,
      specialCharacters: false,
    })
    expect(password).toMatch(regexPasswordWithCapitalLetters)
  })

  it("should generate a password with only numbers", () => {
    const password = PasswordGenerator.generateRandomPassword({
      letters: false,
      capitalLetters: false,
      numbers: true,
      specialCharacters: false,
    })
    expect(password).toMatch(regexPasswordWithNumbers)
  })

  it("should generate a password with only special characters", () => {
    const password = PasswordGenerator.generateRandomPassword({
      letters: false,
      capitalLetters: false,
      numbers: false,
      specialCharacters: true,
    })
    expect(password).toMatch(regexPasswordWithSpecialCharacters)
  })

  it("should generate a password with custom options", () => {
    const options = {
      letters: false,
      capitalLetters: true,
      numbers: true,
      specialCharacters: true,
      length: 10,
    }
    const password = PasswordGenerator.generateRandomPassword(options)
    expect(password.length).toBe(options.length)
    expect(password).toMatch(
      /^(?=.*[0-9])(?=.*[!@#$%^&*()[\]{}|;:,.<>?=-_+])[A-Z0-9!@#$%^&*()[\]{}|;:,.<>?=-_+]+$/,
    )
  })
})
