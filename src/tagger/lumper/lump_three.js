'use strict';
const combine = require('./combine');
const do_three = require('./data/do_three');
// const dont_three = require('./data/dont_three');

const lump_three = function(s) {
  for (let o = 0; o < do_three.length; o++) {
    for (let i = 0; i < s.terms.length - 2; i++) {
      let a = s.terms[i];
      let b = s.terms[i + 1];
      let c = s.terms[i + 2];
      if (do_three[o].condition(a, b, c)) {
        //merge terms A+B
        combine(s, i);
        //merge A+C
        combine(s, i);
        //tag it as POS
        s.terms[i].tag(do_three[o].result, 'lump-three (' + do_three[o].reason + ')');
      }
    }
  }
  return s;
};

module.exports = lump_three;