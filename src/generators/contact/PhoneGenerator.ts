import { Randomizer } from "../../utils/Randomizer"

export default class PhoneNumberGenerator {
  static generateRandomPhoneNumber(options?: { code?: "EUA" | "BRL" }): string {
    let countryCode: string
    let operatorCode: string
    let areaCode: string
    let phoneNumber: string

    if (options && options.code === "EUA") {
      countryCode = "+1"
      operatorCode = Randomizer.getRandomInt(100, 999).toString()
      areaCode = Randomizer.getRandomInt(100, 999).toString()
      phoneNumber = Randomizer.getRandomInt(1000, 9999).toString()
      phoneNumber = `${operatorCode} ${areaCode}-${phoneNumber}`
    } else {
      countryCode = "+55"
      operatorCode = Randomizer.getRandomInt(1, 100).toString()
      areaCode = Randomizer.getRandomInt(10000, 99999).toString()
      phoneNumber = Randomizer.getRandomInt(1000, 9999).toString()
      phoneNumber = `${operatorCode} ${areaCode}-${phoneNumber}`
    }

    return `${countryCode} ${phoneNumber}`
  }
}
