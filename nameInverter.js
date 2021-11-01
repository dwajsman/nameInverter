const nameInverter = function (name) {

  //EXCEPTIONS
  if (name === undefined) throw 'Error!';
  if (name.length === 0) return "";

  let arrName = name.trim().split(' ');

  //console.log(arrName);

  if (arrName.length === 1) {
    if (arrName[0] === "Mr." ||
      arrName[0] === "Mrs." ||
      arrName[0] === "Ms." ||
      arrName[0] === "Dr.") {
      return "";
    }
    return (`${arrName[0]}`);

  } else if (arrName.length === 2) {
    if (arrName[0] === "Mr." ||
      arrName[0] === "Mrs." ||
      arrName[0] === "Ms." ||
      arrName[0] === "Dr.") {
      return (`${arrName[0]} ${arrName[1]}`);
    }
    return (`${arrName[1]}, ${arrName[0]}`);

  } else if (arrName.length === 3) {
    return (`${arrName[0]} ${arrName[2]}, ${arrName[1]}`);

  }

  //console.log("aaa");
  //return "hello";
};


//nameInverter(undefined);

module.exports = nameInverter;