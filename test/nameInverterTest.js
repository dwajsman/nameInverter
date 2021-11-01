const expect = require('chai').expect;
//const chai = require('chai');
const it = require('mocha').it;
//const assert = require('chai').assert;


const nameInverter = require('../nameInverter');




describe('nameInverter', function() {

  // return an empty string when passed an empty string
  // input: ""
  // output: ""
  it("return an empty string when passed an empty string", () => {

    const name = nameInverter("");

    expect(name === "").to.be.true;
  });




  // return a single name when passed a single name
  // input: "name"
  // output: "name"

  it("return a single name when passed a single name", () => {

    const name = nameInverter("name");

    expect(name === "name").to.be.true;

  });


  // return a single name when passed a single name with extra spaces
  // input: " name "
  // output: "name"

  it("return a single name when passed a single name with extra spaces", () => {

    const name = nameInverter(" name ");

    expect(name === "name").to.be.true;

  });

  // return a last-name, first-name when passed a first and last-name
  // input: "first last"
  // output: "last, first"
  it("return a last-name, first-name when passed a first and last-name", () => {

    const name = nameInverter("name lastname");

    expect(name === "lastname, name").to.be.true;

  });




  // Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)
  // input: " first last"
  // output: "last, first"

  it("return a last-name, first-name when passed a first and last-name", () => {

    const name = nameInverter("  name lastname");

    expect(name === "lastname, name").to.be.true;

  });


  // return an empty string when passed a single honorific
  // input: "Dr. "
  // output: ""

  it("return an empty string when passed a single honorific", () => {

    const name = nameInverter("Dr. ");

    expect(name === "").to.be.true;

  });



  // return honorific first-name when passed honorific first-name
  // input: "Dr. first"
  // output: "Dr. first"

  it("return honorific first-name when passed honorific first-name", () => {

    const name = nameInverter("Dr. First");

    expect(name === "Dr. First").to.be.true;

  });



  // return a honorific last-name, first-name when passed honorific first-name last-name
  // input: "Dr. first-name last-name"
  // output: "Dr. last-name, first-name"

  it("return a honorific last-name, first-name when passed honorific first-name last-name", () => {

    const name = nameInverter("Dr. first-name last-name");

    expect(name === "Dr. last-name, first-name").to.be.true;

  });

  // return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words
  // input: " Dr. first-name last-name "
  // output: "Dr. last-name, first-name"

  it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", () => {

    const name = nameInverter("   Dr. first-name last-name    ");

    expect(name === "Dr. last-name, first-name").to.be.true;

  });


  // throw an error when name is undefined
  // input: undefined
  // output: throw 'Error'

  it("throw an error when name is undefined", () => {

    //expect(nameInverter(undefined)).to.Throw();
    expect(nameInverter.bind(undefined)).to.throw('Error!');

    // more info at https://stackoverflow.com/questions/21587122/mocha-chai-expect-to-throw-not-catching-thrown-errors

  });


});