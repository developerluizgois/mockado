import PhoneNumberGenerator from "../../../../src/generators/contact/PhoneGenerator"
import { regexPhoneBRL, regexPhoneEUA } from "../../../../src/utils/Regex"

describe("Tests when generating random phone", () => {
  it("should generate a default random phone number in the format +XX XX XXXXX-XXXX if no parameters or an unexpected parameter is passed", () => {
    const phone = PhoneNumberGenerator.generateRandomPhoneNumber()

    expect(phone).toBeDefined()
    expect(regexPhoneBRL.test(phone)).toBe(true)
  })

  it("should generate a random phone number in the specified format", () => {
    const phone = PhoneNumberGenerator.generateRandomPhoneNumber({
      code: "EUA",
    })

    expect(phone).toBeDefined()
    expect(regexPhoneEUA.test(phone)).toBe(true)
  })
})
