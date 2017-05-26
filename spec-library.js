
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    console.log("isTrue Test Passes");
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    }
    console.log("isFalse Test Passes");
  },

  isEqual: function(a, b) {
    if (a !== b) {
      throw new Error("Assertion failed: " + a + " is not equal to " + b);
    }
    console.log("isEqual Test Passes");
  },

  isNotEqual: function(a, b) {
    if (a === b) {
      throw new Error("Assertion failed: " + a + " is equal to " + b);
    }
    console.log("isNotEqual Test Passes");
  },

  isConstructedFrom: function(a, b) {
    if ( a instanceof b !== true) {
      throw new Error("Assertion failed: " + a + "is not an instance of " + b);
    }
    console.log("isConstructedFrom Test Passes")
  }

};
