import {expect} from 'chai'
import {helloWorld} from './main'

describe('Test hello world function',()=>{
  it('Should return "Hello World"',()=>{
    expect(helloWorld()).to.equal("Hello World")
  })
})
