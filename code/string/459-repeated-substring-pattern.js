const repeatedSubstringPattern = (s) => {
  const reg = /^([a-z]+)\1+$/;
  return reg.test(s)
}

export default repeatedSubstringPattern;