class NameGenerator {
  static getRandomElementFromArray(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  static generateRandomName(options?: {
    gender?: string
    type?: string
  }): string {
    const maleNames = ["john", "michael", "william", "david", "james"]
    const femaleNames = ["mary", "jennifer", "linda", "patricia", "susan"]
    let name = ""

    if (options && options.gender === "male") {
      name = this.getRandomElementFromArray(maleNames)
    } else if (options && options.gender === "female") {
      name = this.getRandomElementFromArray(femaleNames)
    } else {
      const allNames = maleNames.concat(femaleNames)
      name = this.getRandomElementFromArray(allNames)
    }

    if (options && options.type === "fullName") {
      const lastName = "Doe"
      name += " " + lastName
    }

    return name
  }
}

class EmailGenerator {
  static generateRandomEmail(options?: {
    type?: "gmail.com" | "hotmail.com" | "outlook.com" | "yahoo.com"
    gender?: "male" | "female"
  }): string {
    const username = NameGenerator.generateRandomName({
      gender: options?.gender || "male",
    })

    let domain = "example.com"
    if (options && options.type) {
      domain = options.type
    } else {
      const domains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"]
      domain = EmailGenerator.getRandomElementFromArray(domains)
    }

    return `${username}@${domain}`
  }

  private static getRandomElementFromArray(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)]
  }
}

export default EmailGenerator
