class IdentificationGenerator {
  static generateRandomDigits(length: number): string {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("")
  }

  static generateRandomCPF(): string {
    return CPFGenerator.generate()
  }

  static generateRandomIdentification(
    type: "CPF" | "SSN" | "SIN" = "CPF",
  ): string {
    switch (type) {
      case "CPF":
        return CPFGenerator.generate()
      case "SSN":
        return SSNGenerator.generate()
      case "SIN":
        return SINGenerator.generate()
      default:
        throw new Error("Unsupported identification type")
    }
  }
}

class CPFGenerator {
  private static calculateVerifierDigits(baseDigits: string): string {
    const weights1 = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    const weights2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(baseDigits[i]) * weights1[i]
    }

    const remainder1 = sum % 11
    const firstVerifier = remainder1 < 2 ? "0" : String(11 - remainder1)

    const digitsWithFirstVerifier = baseDigits + firstVerifier

    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(digitsWithFirstVerifier[i]) * weights2[i]
    }

    const remainder2 = sum % 11
    const secondVerifier = remainder2 < 2 ? "0" : String(11 - remainder2)

    return firstVerifier + secondVerifier
  }

  static generate(): string {
    const baseDigits = IdentificationGenerator.generateRandomDigits(9)
    const verifierDigits = CPFGenerator.calculateVerifierDigits(baseDigits)
    const part1 = baseDigits.substr(0, 3)
    const part2 = baseDigits.substr(3, 3)
    const part3 = baseDigits.substr(6, 3)
    return `${part1}.${part2}.${part3}-${verifierDigits}`
  }
}

class SSNGenerator {
  static generate(): string {
    const areaNumber = IdentificationGenerator.generateRandomDigits(3)
    const groupNumber = IdentificationGenerator.generateRandomDigits(2)
    const serialNumber = IdentificationGenerator.generateRandomDigits(4)
    return `${areaNumber}-${groupNumber}-${serialNumber}`
  }
}

class SINGenerator {
  static generate(): string {
    const part1 = IdentificationGenerator.generateRandomDigits(3)
    const part2 = IdentificationGenerator.generateRandomDigits(3)
    const part3 = IdentificationGenerator.generateRandomDigits(3)
    return `${part1}-${part2}-${part3}`
  }
}

export default IdentificationGenerator
