module.exports = {
  Value: {},
  Ordinal: {
    isA: 'Value'
  },
  Cardinal: {
    isA: 'Value'
  },
  RomanNumeral: {
    isA: 'Cardinal'
  },
  Fraction: {
    isA: 'Value'
  },
  TextValue: {
    isA: 'Value'
  },
  NumericValue: {
    isA: 'Value'
  },
  NiceNumber: {
    isA: 'Value'
  },
  Money: {},
  Percent: {
    isA: 'Value'
  }
};
