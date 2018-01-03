import { expect } from 'chai'
import now = require("performance-now")
import { helloWorld } from './main'
import exportFunctionSet from './main'

describe('Test hello world function', (): void => {
  it('Should return "Hello World"', (): void => {
    expect(helloWorld()).to.equal("Hello World")
  })

  it('Should held 800ms to finish', (): void => {
    const startTime: number = now()
    const executionTime: number = exportFunctionSet.defaultTest.executionTime
    exportFunctionSet.defaultTest.run(executionTime)
    const endTime: number = now()
    expect(endTime - startTime).to.greaterThan(800)
  })
})
