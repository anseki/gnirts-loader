'use strict';

let mangleThrow;
const expect = require('chai').expect,
  sinon = require('sinon'),
  proxyquire = require('proxyquire').noPreserveCache(),
  ERR_MSG = 'ERR_MSG',
  gnirts = {
    mangle: sinon.spy(content => {
      if (mangleThrow) { throw new Error(ERR_MSG); }
      return `${content}<mangle>`;
    })
  },
  loader = proxyquire('../', {gnirts}),

  CONTENTS = 'content',
  RES_METHOD = `${CONTENTS}<mangle>`;

function resetAll() {
  gnirts.mangle.resetHistory();
}

describe('implements a basic flow as loader', () => {

  it('should return processed value', () => {
    mangleThrow = false;
    resetAll();
    expect(loader.call({}, CONTENTS)).to.equal(RES_METHOD);
    expect(gnirts.mangle.calledOnceWithExactly(CONTENTS)).to.be.true;
  });

  it('should return a null if a null is input', () => {
    mangleThrow = false;
    resetAll();
    expect(loader.call({}, null)).to.be.null;
    expect(gnirts.mangle.notCalled).to.be.true;
  });

});

describe('mangle()', () => {

  it('should return processed value by method', () => {
    mangleThrow = false;
    resetAll();
    expect(loader.call({}, CONTENTS)).to.equal(RES_METHOD);
    expect(gnirts.mangle.calledOnceWithExactly(CONTENTS)).to.be.true;
  });

  it('should throw an error if mangle failed', () => {
    mangleThrow = false;
    resetAll();
    expect(loader.call({}, CONTENTS)).to.equal(RES_METHOD);
    expect(gnirts.mangle.calledOnceWithExactly(CONTENTS)).to.be.true;

    // Throws
    mangleThrow = true;
    resetAll();
    expect(() => { loader.call({}, CONTENTS); }).to.throw(ERR_MSG);
    expect(gnirts.mangle.calledOnceWithExactly(CONTENTS)).to.be.true;
  });

});
