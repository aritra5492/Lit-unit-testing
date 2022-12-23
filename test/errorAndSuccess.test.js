import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('_toHome methosd to be called', async() => {
    const el=await fixture(html`<loan-success></loan-success>`);
    const myspy=Sinon.spy(el,'_toHome');
     myspy();
    expect(myspy.called).to.be.true;
  })
});

describe('error screen', () => {
  // Write test cases inside this block
  it('', async() => {
    const el=await fixture(html`<loan-error></loan-error>`);
    const myspy=Sinon.spy(el,'_toHome');
     myspy();
    expect(myspy.called).to.be.true;
  })
});