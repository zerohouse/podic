/* jshint ignore:start */
if (!Array.prototype.find) {
  Array.prototype.find = function (callback, thisArg) {
    "use strict";
    var arr = this,
      arrLen = arr.length,
      i;
    for (i = 0; i < arrLen; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return arr[i];
      }
    }
    return undefined;
  };
}

Date.prototype.format = function (f) {
  return moment().format(f);
};

Date.prototype.getDateTime = function () {
  return this.getDateString() + " (" + this.getDayKR() + ") " + this.getTimeString();
};

Date.prototype.toYMD = function () {
  if (new Date().isSameDay(this))
    return this.fromNow();
  return this.getDateTime();
};

Date.prototype.getDateString = function () {
  if (this.getFullYear() === new Date().getFullYear())
    return moment(this).format("M월 D일");
  return moment(this).format("YYYY년 M월 D일");
};

Date.prototype.isPast = function () {
  return this.getTime() < new Date().getTime();
};

Date.prototype.fromNow = function () {
  return moment(this).fromNow();
};

Date.prototype.getTimeString = function () {
  return moment(this).format("HH:mm");
};

Date.prototype.isSameDay = function (date) {
  if (!date)
    return false;
  return this.getFullYear() === date.getFullYear() && this.getMonth() === date.getMonth() && this.getDate() === date.getDate();
};

Date.prototype.getDayKR = function () {
  return ["일", "월", "화", "수", "목", "금", "토"][this.getDay()];
};

Date.prototype.range = function (date) {
  var early, late;
  if (this <= date) {
    early = this;
    late = date;
  } else {
    early = date;
    late = this;
  }
  if (this.isSameDay(date))
    return this.getDateString() + " (" + this.getDayKR() + ") " + early.getTimeString() + " ~ " + late.getTimeString();
  return early.toYMD() + " ~ " + late.toYMD();
};

if (!Array.prototype.contains) {
  Array.prototype.contains = function (searchElement /*, fromIndex*/) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
        (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}

if (typeof String.prototype.startsWith !== 'function') {
  String.prototype.startsWith = function (str) {
    return this.indexOf(str) === 0;
  };
}

Array.prototype.ignoreTypeContains = function (searchElement /*, fromIndex*/) {
  'use strict';
  var O = Object(this);
  var len = parseInt(O.length) || 0;
  if (len === 0) {
    return false;
  }
  var n = parseInt(arguments[1]) || 0;
  var k;
  if (n >= 0) {
    k = n;
  } else {
    k = len + n;
    if (k < 0) {
      k = 0;
    }
  }
  var currentElement;
  while (k < len) {
    currentElement = O[k];
    if (searchElement == currentElement ||
      (searchElement != searchElement && currentElement != currentElement)) {
      return true;
    }
    k++;
  }
  return false;
};

Array.prototype.toggle = function (el) {
  if (this.contains(el)) {
    this.remove(el);
    return;
  }
  this.push(el);
};


Array.prototype.remove = function (el) {
  if (!this.contains(el))
    return;
  this.splice(this.indexOf(el), 1);
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

Array.prototype.pushIfNotExist = function (el) {
  if (this.contains(el))
    return;
  this.push(el);
};

Array.prototype.findById = function (id) {
  return this.findBy("id", id);
};

Array.prototype.findBy = function (name, value) {
  return this.find(function (el) {
    return el[name] == value;
  });
};

Array.prototype.removeBy = function (name, id) {
  return this.remove(this.findBy(name, id));
};

Array.prototype.removeById = function (id) {
  return this.remove(this.findBy("id", id));
};

Array.prototype.pushAll = function (array) {
  if (!array || !array.forEach)
    return;
  var self = this;
  array.forEach(function (each) {
    self.push(each);
  });
};

Array.prototype.removeAll = function (array) {
  if (!array || !array.forEach)
    return;
  var self = this;
  array.forEach(function (each) {
    self.remove(each);
  });
};

Array.prototype.last = function () {
  if (!this.length)
    return;
  return this[this.length - 1];
};

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.pushInto = function (index, val) {
  var tail = this.splice(index);
  this.push(val);
  this.pushAll(tail);
};

Number.prototype.toDay = function () {
  return ["월", "화", "수", "목", "금", "토", "일"][this % 7];
};

Number.prototype.toArray = function () {
  var result = [];
  for (var i = 0; i < this; i++) {
    result.push(i);
  }
  return result;
};


String.prototype.newLine = function () {
  return this.replace(/\n/g, '<br>');
};

String.prototype.removeTags = function () {
  return this.replace(/(<([^>]+)>)|(<[^<]+)$/ig, "");
};

if (!Number.prototype.toFixed)
  Number.prototype.toFixed = function (decimals) {
    return Math.round(this * Math.pow(10, decimals)) / (Math.pow(10, decimals));
  };

if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {
    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this === null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}
