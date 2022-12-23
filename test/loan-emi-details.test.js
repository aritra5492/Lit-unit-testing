import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this bloc
  before( async() => {
    element = await fixture(html`<loanemi-details></loanemi-details>`);
  })

  xit('checks for the accessibility',async()=>{
    expect(element).to.be.accessible();
  });

  xit('checks all the methods',async()=>{
    let superElement=await Sinon.spy(element,'super');
    await element.constructor();
    await expect(superElement.calledOnce).to.be.false;
  });

  
  xit('navigation to next ',async()=>{
    let btn=el.shadowRoot.querySelector('lion-button');
    let myspy=Sinon.spy(element,'_toCustomer');
    btn[1].click();
    expect(myspy).to.not.have.called;
  });
});
