export default class DateGenerator {
  static generateRandomDOB(options?: {
    format?:
      | "YYYY-MM-DD"
      | "DD/MM/YYYY"
      | "MM/DD/YYYY"
      | "MMM DD, YYYY"
      | "DD MMM YYYY"
      | "YYYY/MM/DD"
      | "YYYY-MM-DD HH:mm:ss"
    start?: Date
    end?: Date
  }): string {
    // Define default values for start and end if not provided
    const { start = new Date(1950, 0, 1), end = new Date() } = options ?? {}

    // Generate a random date between start and end
    const dob = DateGenerator.getRandomDate(start, end)

    // Format the date as specified in options, if provided
    if (options?.format) {
      return DateGenerator.formatDate(dob, options.format)
    }

    // Return the date in ISO format if no format is specified
    return dob.toISOString().split("T")[0]
  }

  private static getRandomDate(start: Date, end: Date): Date {
    const startTime = start.getTime()
    const endTime = end.getTime()
    const randomTime = startTime + Math.random() * (endTime - startTime)
    return new Date(randomTime)
  }

  private static formatDate(date: Date, format: string): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const hour = String(date.getHours()).padStart(2, "0")
    const minute = String(date.getMinutes()).padStart(2, "0")
    const second = String(date.getSeconds()).padStart(2, "0")
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]

    switch (format) {
      case "YYYY-MM-DD":
        return `${year}-${month}-${day}`
      case "DD/MM/YYYY":
        return `${day}/${month}/${year}`
      case "MM/DD/YYYY":
        return `${month}/${day}/${year}`
      case "MMM DD, YYYY":
        return `${monthNames[date.getMonth()]} ${day}, ${year}`
      case "DD MMM YYYY":
        return `${day} ${monthNames[date.getMonth()]} ${year}`
      case "YYYY/MM/DD":
        return `${year}/${month}/${day}`
      case "YYYY-MM-DD HH:mm:ss":
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
      default:
        return date.toISOString().split("T")[0]
    }
  }
}
