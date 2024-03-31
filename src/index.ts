import NameGenerator from "./generators/credentials/NameGenerator"
import EmailGenerator from "./generators/credentials/EmailGenerator"
import PasswordGenerator from "./generators/credentials/PasswordGenerator"

const mockado = {
  name: NameGenerator.generateRandomName,
  email: EmailGenerator.generateRandomEmail,
  password: PasswordGenerator.generateRandomPassword,
}

export default mockado
