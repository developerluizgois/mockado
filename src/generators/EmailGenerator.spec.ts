import EmailGenerator from "./EmailGenerator"

describe("EmailGenerator", () => {
  describe("generateRandomEmail", () => {
    it("should generate a random email with default options", () => {
      const email = EmailGenerator.generateRandomEmail()
      expect(email).toBeDefined()
    })

    it("should generate a random email with specified gender", () => {
      const email = EmailGenerator.generateRandomEmail({ gender: "female" })
      expect(email).toBeDefined()
    })

    it("should generate a random email with specified domain", () => {
      const email = EmailGenerator.generateRandomEmail({ type: "gmail.com" })
      expect(email).toMatch(/^.+@gmail.com$/)
    })

    it("should generate a random email with specified gender and domain", () => {
      const email = EmailGenerator.generateRandomEmail({
        gender: "male",
        type: "yahoo.com",
      })
      expect(email).toMatch(/^.+@yahoo.com$/)
    })
  })
})
