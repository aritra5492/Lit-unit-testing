import { html, fixture, expect } from '@open-wc/testing';
import { Router } from '@vaadin/router';
import Sinon,{ stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  let element;
  before( async() => {
    element = await fixture(html`<basic-details></basic-details>`);
  })
//   after( function () {
//     const spy = Sinon.spy(element, '_numToWord');
//     fetch.restore();
//     spy.restore(); // Unwraps the spy
// });

  // Write test cases inside this block
  // refer basic-details.js files
  it('is accessible', () => {
    expect(element).to.be.accessible;
  });
  it(' constructor initializes values', () => {
    expect(element.amount).to.equal(10000);

  });
  it('number should change to word', () => {
    element._numToWord();
    element.shadowRoot.querySelector('.amount').value = 10000;
    expect(element.shadowRoot.querySelector('#word').innerHTML.trim()).to.equal('ten thousand');
  })

  it('should not call POST req as value is less than 10000', () => {
    const spy = Sinon.spy(window, 'fetch');
    element.shadowRoot.querySelector('.type').value = 'Personal Loan'
    element.shadowRoot.querySelector('.amount').value = 9000;
    element.shadowRoot.querySelector('.period').value = 10;
    element._captureDetails();
    expect(spy).to.not.have.called;
    spy.restore();
  })
  it('_captureDetails() - makes a post request with the inputs', ()=>{
    const spy = Sinon.spy(window, 'fetch');
    element.shadowRoot.querySelector('.type').value = 'Personal Loan';
    element.shadowRoot.querySelector('.amount').value = '10000';
    element.shadowRoot.querySelector('.period').value = '10';
    element._captureDetails();
    expect(spy.args[0][1].method).to.equal('POST');
    expect(spy.args[0][1].body).deep.equal('{"name":"Personal Loan","amount":"10000","period":"10"}');
    expect(spy).to.have.called;
    spy.restore();
  });
  it('should navigate to dashboard', () => {
    const spy = Sinon.spy(Router, 'go');
    element._toDashboard();
    expect(spy.firstCall.args[0]).to.equal('/');
  })
});

