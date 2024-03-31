import IdentificationGenerator from "../../../../src/generators/personal/Identification"
import { regexCPF, regexSIN, regexSSN } from "../../../../src/utils/Regex"

describe("Test returning random IDs", () => {
  it("must return a random identification in CPF format if no parameter or a parameter outside the expected one is passed", () => {
    const identification =
      IdentificationGenerator.generateRandomIdentification()
    expect(regexCPF.test(identification)).toBe(true)
  })
  it("must return a random identification in CPF format if the CPF parameter is passed", () => {
    const identification =
      IdentificationGenerator.generateRandomIdentification("CPF")
    expect(regexCPF.test(identification)).toBe(true)
  })
  it("must return a random identification in SSN format if the CPF parameter is passed", () => {
    const identification =
      IdentificationGenerator.generateRandomIdentification("SSN")
    expect(regexSSN.test(identification)).toBe(true)
  })
  it("must return a random identification in SIN format if the CPF parameter is passed", () => {
    const identification =
      IdentificationGenerator.generateRandomIdentification("SIN")
    expect(regexSIN.test(identification)).toBe(true)
  })
})
