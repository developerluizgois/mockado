import NameGenerator from "./generators/NameGenerator"
import EmailGenerator from "./generators/EmailGenerator"
import PasswordGenerator from "./generators/PasswordGenerator"

const mockado = {
  name: NameGenerator.generateRandomName,
  email: EmailGenerator.generateRandomEmail,
  password: PasswordGenerator.generateRandomPassword,
}

export default mockado
