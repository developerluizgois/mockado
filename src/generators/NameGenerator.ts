class NameGenerator {
  static generateRandomName(options?: {
    type?: "username" | "name" | "fullName"
    gender?: "male" | "female"
  }): string {
    let randomName = ""

    if (options && options.type === "username") {
      randomName = this.generateRandomUsername(options.gender)
    } else if (options && options.type === "name") {
      randomName = this.generateRandomFirstName(options.gender)
    } else if (options && options.type === "fullName") {
      randomName = this.generateRandomFullName(options.gender)
    } else {
      randomName = this.generateRandomFirstName(options?.gender)
    }

    return randomName
  }

  static generateRandomUsername(gender?: "male" | "female"): string {
    const firstName = this.generateRandomFirstName(gender)
    const randomNumber = Math.floor(Math.random() * 1000)
    const username = `${firstName}${randomNumber}`
    return username.toLowerCase()
  }

  static generateRandomFirstName(gender?: "male" | "female"): string {
    const names =
      gender === "male"
        ? ["John", "Michael", "David", "James", "William"]
        : ["Mary", "Jennifer", "Linda", "Patricia", "Elizabeth"]
    return names[Math.floor(Math.random() * names.length)]
  }

  static generateRandomFullName(gender?: "male" | "female"): string {
    const firstName = this.generateRandomFirstName(gender)
    const lastName = this.generateRandomLastName()
    return `${firstName} ${lastName}`
  }

  static generateRandomLastName(): string {
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"]
    return lastNames[Math.floor(Math.random() * lastNames.length)]
  }
}

export default NameGenerator
