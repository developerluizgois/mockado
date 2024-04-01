import { adresses } from "../../../data/location"
import { Randomizer } from "../../utils/Randomizer"

export default class LocationGenerator {
  static generateRandomAddress(
    options?: "street" | "number" | "district" | "city" | "state" | "zipCode",
  ): string {
    const address = Randomizer.getRandomElementFromArray(adresses)
    const components = [
      "street",
      "number",
      "district",
      "city",
      "state",
      "zipCode",
    ]

    if (options && components.includes(options)) {
      return address[options]
    } else {
      return `${address.street}, ${address.number} - ${address.district}, ${address.city} - ${address.state}, ${address.zipCode}`
    }
  }
}
