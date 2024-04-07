export class DuplicateChecker {
  static checkIfElementsDuplicates(array: string[]): boolean {
    const counter: { [key: string]: number } = {}
    for (let i = 0; i < array.length; i++) {
      const index = array[i]
      if (counter[index] === undefined) {
        counter[index] = 1
      } else {
        return true
      }
    }
    return false
  }
}
