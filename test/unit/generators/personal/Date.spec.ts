import DateGenerator from "../../../../src/generators/personal/Date"
import {
  regexDD_MMM_YYYY,
  regexDD_MM_YYYY,
  regexMMM_DD_YYYY,
  regexMM_DD_YYYY,
  regexYYYY_MM_DD,
  regexYYYY_MM_DD_HH_mm_ss,
  regexYYYY_MM_DD_Slash,
} from "../../../../src/utils/Regex"

const currentDate = new Date()

describe("Test returning random dates", () => {
  it("should return a random date between 1/1/1950 and the current date in the format YYYY-MM-DD", () => {
    const date = DateGenerator.generateRandomDOB()
    const randomDate = new Date(date)
    expect(regexYYYY_MM_DD.test(date)).toBe(true)
    expect(
      randomDate >= new Date(1950, 0, 1) && randomDate <= currentDate,
    ).toBe(true)
  })

  it("should return a random date in the chosen format", () => {
    const date = DateGenerator.generateRandomDOB({
      format: "DD MMM YYYY",
    })
    expect(regexDD_MMM_YYYY.test(date)).toBe(true)
  })

  it("should return a random date in the chosen format", () => {
    const date = DateGenerator.generateRandomDOB({
      format: "DD/MM/YYYY",
    })
    expect(regexDD_MM_YYYY.test(date)).toBe(true)
  })

  it("should return a random date in the chosen format", () => {
    const date = DateGenerator.generateRandomDOB({
      format: "MMM DD, YYYY",
    })
    expect(regexMMM_DD_YYYY.test(date)).toBe(true)
  })

  it("should return a random date in the chosen format", () => {
    const date = DateGenerator.generateRandomDOB({
      format: "DD/MM/YYYY",
    })
    expect(regexDD_MM_YYYY.test(date)).toBe(true)
  })

  it("should return a random date in the chosen format", () => {
    const date = DateGenerator.generateRandomDOB({
      format: "MM/DD/YYYY",
    })
    expect(regexMM_DD_YYYY.test(date)).toBe(true)
  })

  it("should return a random date in the chosen format", () => {
    const date = DateGenerator.generateRandomDOB({
      format: "YYYY-MM-DD HH:mm:ss",
    })
    expect(regexYYYY_MM_DD_HH_mm_ss.test(date)).toBe(true)
  })

  it("should return a random date in the chosen format", () => {
    const date = DateGenerator.generateRandomDOB({
      format: "YYYY-MM-DD",
    })
    expect(regexYYYY_MM_DD.test(date)).toBe(true)
  })

  it("should return a random date in the chosen format", () => {
    const date = DateGenerator.generateRandomDOB({
      format: "YYYY/MM/DD",
    })
    expect(regexYYYY_MM_DD_Slash.test(date)).toBe(true)
  })

  it("must return a random date in the format YYYY-MM-DD between the chosen start date and the current date", () => {
    const startDate = new Date(1968, 0, 1)
    const date = DateGenerator.generateRandomDOB({
      start: startDate,
    })
    const randomDate = new Date(date)
    expect(regexYYYY_MM_DD.test(date)).toBe(true)
    expect(randomDate >= startDate && randomDate <= currentDate).toBe(true)
  })

  it("must return a random date in the format YYYY-MM-DD between the chosen end date and the maximum start date", () => {
    const endDate = new Date(1977, 4, 8)
    const date = DateGenerator.generateRandomDOB({
      end: endDate,
    })
    const randomDate = new Date(date)
    expect(regexYYYY_MM_DD.test(date)).toBe(true)
    expect(randomDate <= endDate && randomDate <= currentDate).toBe(true)
  })
})
