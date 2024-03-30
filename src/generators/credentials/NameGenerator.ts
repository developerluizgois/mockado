import { femaleNames, maleNames, lastNames } from "../../../data/personal"
import { Randomizer } from "../../utils/Randomizer"

export default class NameGenerator {
  static generateRandomName(options?: {
    gender?: "male" | "female"
    type?: "firstName" | "fullName" | "username"
  }): string {
    let response = ""

    if (options && options.gender) {
      if (options.gender === "male") {
        response = Randomizer.getRandomElementFromArray(maleNames)
      } else if (options.gender === "female") {
        response = Randomizer.getRandomElementFromArray(femaleNames)
      }
    } else {
      const allNames = maleNames.concat(femaleNames)
      response = Randomizer.getRandomElementFromArray(allNames)
    }

    if (options && options.type) {
      if (options.type === "username") {
        const username = response.split(" ")[0].toLowerCase()
        response = NameGenerator.generateUsername(username) // Correção aqui
      } else if (options.type === "fullName") {
        const lastName = Randomizer.getRandomElementFromArray(lastNames)
        response += " " + lastName
      }
    }

    return response
  }

  private static generateUsername(firstName: string): string {
    const randomNumber = Randomizer.getRandomInt(0, 1000)
    return firstName.toLowerCase() + randomNumber
  }
}
