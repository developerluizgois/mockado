import NameGenerator from "./generators/credentials/NameGenerator"
import EmailGenerator from "./generators/credentials/EmailGenerator"
import PasswordGenerator from "./generators/credentials/PasswordGenerator"
import DateGenerator from "./generators/personal/Date"
import IdentificationGenerator from "./generators/personal/Identification"

const mockado = {
  name: NameGenerator.generateRandomName,
  email: EmailGenerator.generateRandomEmail,
  password: PasswordGenerator.generateRandomPassword,
  date: DateGenerator.generateRandomDOB,
  identification: IdentificationGenerator.generateRandomIdentification,
}

export default mockado
