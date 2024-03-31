import EmailGenerator from "../../../src/generators/credentials/EmailGenerator"
import { regexEmail } from "../../../src/utils/Regex"

describe("Tests when generating random email", () => {
  it("should generate a random email with default options", () => {
    const email = EmailGenerator.generateRandomEmail()

    expect(email).toBeDefined()
    expect(regexEmail.test(email)).toBe(true)
  })

  it("should generate a random email with specified domain", () => {
    const email = EmailGenerator.generateRandomEmail({ type: "gmail.com" })

    expect(email).toMatch(/^.+@gmail.com$/)
    expect(regexEmail.test(email)).toBe(true)
  })

  it("should generate a random email with specified gender", () => {
    const email = EmailGenerator.generateRandomEmail({
      gender: "male",
    })
    expect(email).toBeDefined()
  })

  it("should generate a random email with specified gender and domain", () => {
    const email = EmailGenerator.generateRandomEmail({
      gender: "male",
      type: "yahoo.com",
    })
    expect(email).toMatch(/^.+@yahoo.com$/)
  })
})
