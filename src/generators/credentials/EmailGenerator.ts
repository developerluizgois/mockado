import NameGenerator from "./NameGenerator"
import { Randomizer } from "../../utils/Randomizer"

export default class EmailGenerator {
  static generateRandomEmail(options?: {
    type?: "gmail.com" | "hotmail.com" | "outlook.com" | "yahoo.com"
    gender?: "male" | "female"
  }): string {
    const username = NameGenerator.generateRandomName({
      gender: options?.gender || "male",
      type: "username",
    })

    let domain: string
    if (options && options.type) {
      domain = options.type
    } else {
      const domains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"]
      domain = Randomizer.getRandomElementFromArray(domains)
    }

    return `${username}@${domain}`
  }
}
