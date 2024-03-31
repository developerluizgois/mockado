import NameGenerator from "../../../../src/generators/credentials/NameGenerator"
import {
  regexFirstName,
  regexFullName,
  regexUserName,
} from "../../../../src/utils/Regex"

describe("NameGenerator", () => {
  describe("generateRandomName", () => {
    it("should generate a random username", () => {
      const username = NameGenerator.generateRandomName({ type: "username" })
      expect(username).toBeDefined()
      expect(regexUserName.test(username)).toBe(true)
    })

    it("should generate a random first name", () => {
      const firstName = NameGenerator.generateRandomName({ type: "firstName" })
      expect(firstName).toBeDefined()
      expect(regexFirstName.test(firstName)).toBe(true)
    })

    it("should generate a random full name", () => {
      const fullName = NameGenerator.generateRandomName({ type: "fullName" })
      expect(fullName).toBeDefined()
      expect(regexFullName.test(fullName)).toBe(true)
    })

    it("should generate a random first name when type is not specified", () => {
      const firstName = NameGenerator.generateRandomName()
      expect(firstName).toBeDefined()
      expect(regexFirstName.test(firstName)).toBe(true)
    })

    it("should generate a random first name for male gender", () => {
      const firstName = NameGenerator.generateRandomName({
        gender: "male",
      })
      expect(firstName).toBeDefined()
      expect(regexFirstName.test(firstName)).toBe(true)
    })

    it("should generate a random first name for female gender", () => {
      const firstName = NameGenerator.generateRandomName({
        gender: "female",
      })
      expect(firstName).toBeDefined()
    })
  })
})
