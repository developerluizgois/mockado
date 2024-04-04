import NameGenerator from "./generators/credentials/NameGenerator"
import EmailGenerator from "./generators/credentials/EmailGenerator"
import PasswordGenerator from "./generators/credentials/PasswordGenerator"
import DateGenerator from "./generators/personal/Date"
import IdentificationGenerator from "./generators/personal/Identification"
import PhoneNumberGenerator from "./generators/contact/PhoneGenerator"
import LocationGenerator from "./generators/contact/LocationGenerator"

export const name = NameGenerator.generateRandomName
export const email = EmailGenerator.generateRandomEmail
export const password = PasswordGenerator.generateRandomPassword
export const date = DateGenerator.generateRandomDOB
export const identification =
  IdentificationGenerator.generateRandomIdentification
export const phoneNumber = PhoneNumberGenerator.generateRandomPhoneNumber
export const address = LocationGenerator.generateRandomAddress
