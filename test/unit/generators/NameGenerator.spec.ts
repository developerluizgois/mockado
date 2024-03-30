import NameGenerator from "../../../src/generators/credentials/NameGenerator"

describe("NameGenerator", () => {
  describe("generateRandomName", () => {
    it("should generate a random username", () => {
      const username = NameGenerator.generateRandomName({ type: "username" })
      const regex = /^[a-z0-9]+$/
      expect(username).toBeDefined()
      expect(regex.test(username)).toBe(true)
    })

    it("should generate a random first name", () => {
      const firstName = NameGenerator.generateRandomName({ type: "firstName" })
      const regex = /^[A-Za-z]+$/
      expect(firstName).toBeDefined()
      expect(regex.test(firstName)).toBe(true)
    })

    it("should generate a random full name", () => {
      const fullName = NameGenerator.generateRandomName({ type: "fullName" })
      const regex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/
      expect(fullName).toBeDefined()
      expect(regex.test(fullName)).toBe(true)
    })

    it("should generate a random first name when type is not specified", () => {
      const firstName = NameGenerator.generateRandomName()
      const regex = /^[A-Za-z]+$/
      expect(firstName).toBeDefined()
      expect(regex.test(firstName)).toBe(true)
    })

    it("should generate a random first name for male gender", () => {
      const firstName = NameGenerator.generateRandomName({
        gender: "male",
      })
      const regex = /^[A-Za-z]+$/
      expect(firstName).toBeDefined()
      expect(regex.test(firstName)).toBe(true)
    })

    it("should generate a random first name for female gender", () => {
      const firstName = NameGenerator.generateRandomName({
        gender: "female",
      })
      expect(firstName).toBeDefined()
    })
  })
})
