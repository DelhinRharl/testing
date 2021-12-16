const stringLen = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw Error("the string is too short or too long!Please check  again");
  } else {
    return string.length;
  }
};
module.exports = stringLen;
