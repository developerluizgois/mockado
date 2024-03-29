import NameGenerator from "./NameGenerator"

describe("NameGenerator", () => {
  describe("generateRandomName", () => {
    it("should generate a random username", () => {
      const username = NameGenerator.generateRandomName({ type: "username" })
      expect(username).toBeDefined()
    })

    it("should generate a random name", () => {
      const name = NameGenerator.generateRandomName({ type: "name" })
      expect(name).toBeDefined()
    })

    it("should generate a random full name", () => {
      const fullName = NameGenerator.generateRandomName({ type: "fullName" })
      expect(fullName).toBeDefined()
    })

    it("should generate a random first name when type is not specified", () => {
      const firstName = NameGenerator.generateRandomName()
      expect(firstName).toBeDefined()
    })

    it("should generate a random first name for male gender", () => {
      const firstName = NameGenerator.generateRandomName({
        type: "name",
        gender: "male",
      })
      expect(firstName).toBeDefined()
    })

    it("should generate a random first name for female gender", () => {
      const firstName = NameGenerator.generateRandomName({
        type: "name",
        gender: "female",
      })
      expect(firstName).toBeDefined()
    })
  })

  describe("generateRandomUsername", () => {
    it("should generate a random username for male gender", () => {
      const username = NameGenerator.generateRandomUsername("male")
      expect(username).toBeDefined()
    })

    it("should generate a random username for female gender", () => {
      const username = NameGenerator.generateRandomUsername("female")
      expect(username).toBeDefined()
    })
  })

  describe("generateRandomFirstName", () => {
    it("should generate a random first name for male gender", () => {
      const firstName = NameGenerator.generateRandomFirstName("male")
      expect(firstName).toBeDefined()
    })

    it("should generate a random first name for female gender", () => {
      const firstName = NameGenerator.generateRandomFirstName("female")
      expect(firstName).toBeDefined()
    })
  })

  describe("generateRandomFullName", () => {
    it("should generate a random full name for male gender", () => {
      const fullName = NameGenerator.generateRandomFullName("male")
      expect(fullName).toBeDefined()
    })

    it("should generate a random full name for female gender", () => {
      const fullName = NameGenerator.generateRandomFullName("female")
      expect(fullName).toBeDefined()
    })
  })

  describe("generateRandomLastName", () => {
    it("should generate a random last name", () => {
      const lastName = NameGenerator.generateRandomLastName()
      expect(lastName).toBeDefined()
    })
  })
})
