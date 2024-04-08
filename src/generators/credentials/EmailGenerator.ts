import NameGenerator from "./NameGenerator"
import { Randomizer } from "../../utils/Randomizer"
import { Formatter } from "../../utils/Formatter"

export default class EmailGenerator {
  static generateRandomEmail(options?: {
    type?: "gmail.com" | "hotmail.com" | "outlook.com" | "yahoo.com"
    gender?: "male" | "female"
    numbers?: boolean
  }): string {
    const fullName = NameGenerator.generateRandomName({
      gender: options?.gender || "male",
      type: "fullName",
    })

    let formattedFullname = Formatter.formatString(fullName)

    if (options && options.numbers) {
      formattedFullname = formattedFullname + Randomizer.getRandomInt(1, 10000)
    }

    let domain: string
    if (options && options.type) {
      domain = options.type
    } else {
      const domains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"]
      domain = Randomizer.getRandomElementFromArray(domains)
    }

    return `${formattedFullname}@${domain}`
  }
}
