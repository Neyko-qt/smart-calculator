class SmartCalculator {
  constructor(initialValue) {
    this.result = initialValue;
    this.strOfValues = initialValue.toString();
  }


  add(number) {
    var tmp = '+' + number;
    this.strOfValues = this.strOfValues + tmp;
    this.result = eval(this.strOfValues);

    return this;
  }

  subtract(number) {
    var tmp = '-' + number;
    this.strOfValues = this.strOfValues + tmp;
    this.result = eval(this.strOfValues);
    
    return this;
  }

  multiply(number) {
    var tmp = '*' + number;
    this.strOfValues = this.strOfValues + tmp;
    this.result = eval(this.strOfValues);
    
    return this;
  }

  devide(number) {
    var tmp = '/' + number;
    this.strOfValues = this.strOfValues + tmp;
    this.result = eval(this.strOfValues);
    
    return this;
  }

  pow(number) { 
    var tmp = '**' + number;
    this.strOfValues = this.strOfValues + tmp;
    this.result = eval(this.strOfValues);
    
    return this;
  }

  valueOf() {
    return this.result;
  }
}

module.exports = SmartCalculator;