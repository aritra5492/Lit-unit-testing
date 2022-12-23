import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('check whether Apply loan is the header', async() => {
    const element = await fixture(html`<loan-header></loan-header>`);
    await expect(element).to.be.accessible();
    const paragraph = element.shadowRoot.querySelector('p');
    expect(paragraph.textContent).to.equal('Apply Loan')
  })
});
