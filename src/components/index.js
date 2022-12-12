// This functions is used for generating a key for every li element return eg: SVDT-8249, LKNA-3005. example pattern is AAAA-IIII
const keyGenerator = () => {
  let randNums = Math.round(Math.random() * 9000 + 999);
  let key = ['', '-', randNums];
  const alphaNumGenerator = () => {
      let randAlpha = Math.ceil(Math.random() * 26);
      return randAlpha;
  };
  for (let i = 0; i < 4; i++) {
      let oneAlphaNum = alphaNumGenerator();
      key[0] += String.fromCharCode(oneAlphaNum + 64);
  }
  return key.join('');
};

export {keyGenerator}