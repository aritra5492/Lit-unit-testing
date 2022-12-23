import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';

import '../loan-application.js';

let el, dashboard;
before(async() => {
    el = await fixture(html `<loan-application></loan-application>`);
    dashboard = await fixture(html `<dash-board></dash-board>`);
});

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('test the increment method',async()=>{;
  const inv=Sinon.spy(el,'_increment').returns(true);
  //LoanApplication._increment();
  expect(inv.calledOnce).to.be.true;
  spy.restore();
  });
  it('is dashboard accessible', () => {
  expect(dashboard).to.be.accessible;
});
});
