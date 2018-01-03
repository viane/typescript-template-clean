/** Import Modules */
import now = require("performance-now")

// Implement your function here

const main = (executionTime): void => {
  let startTime: number = now(), endTime: number

  const sleep = (miliseconds): void => {
    const currentTime: number = new Date().getTime()
    const holdUntil: number = currentTime + miliseconds
    while (holdUntil >= new Date().getTime()) {
    }
  }

  sleep(executionTime)

  endTime = now()

  console.log("\nTask took " + (endTime - startTime).toFixed(1) + " milliseconds to finish.\n")
}

main(800)

// Single function export
export function helloWorld(): string {
  return "Hello World"
}

// Export function set
export default {
  defaultTest: { run: main, executionTime: 800 }
}

// End of implementation
