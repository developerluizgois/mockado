import NameGenerator from "./generators/credentials/NameGenerator"
import EmailGenerator from "./generators/credentials/EmailGenerator"
import PasswordGenerator from "./generators/credentials/PasswordGenerator"
import DateGenerator from "./generators/personal/Date"
import IdentificationGenerator from "./generators/personal/Identification"
import PhoneNumberGenerator from "./generators/contact/PhoneGenerator"
import LocationGenerator from "./generators/contact/LocationGenerator"

const mockado = {
  name: NameGenerator.generateRandomName,
  email: EmailGenerator.generateRandomEmail,
  password: PasswordGenerator.generateRandomPassword,
  date: DateGenerator.generateRandomDOB,
  identification: IdentificationGenerator.generateRandomIdentification,
  phone: PhoneNumberGenerator.generateRandomPhoneNumber,
  location: LocationGenerator.generateRandomAddress,
}

export default mockado
