import LocationGenerator from "../../../../src/generators/contact/LocationGenerator"
import {
  regexCity,
  regexCompleteAddress,
  regexZipCode,
} from "../../../../src/utils/Regex"

describe("Tests when generating random address", () => {
  it("should generate a default random address in full address format if no parameter or an unexpected parameter is passed", () => {
    const address = LocationGenerator.generateRandomAddress()

    expect(address).toBeDefined()
    expect(regexCompleteAddress.test(address)).toBe(true)
  })

  it("must generate a random address in the specified format", () => {
    const address = LocationGenerator.generateRandomAddress("city")

    expect(address).toBeDefined()
    expect(regexCity.test(address)).toBe(true)
  })

  it("must generate a random address in the specified format", () => {
    const address = LocationGenerator.generateRandomAddress("zipCode")

    expect(address).toBeDefined()
    expect(regexZipCode.test(address)).toBe(true)
  })
})
