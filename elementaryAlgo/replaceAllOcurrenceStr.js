const replaceAllOcurrenceStr = (str, word, rep) => {
  return str.split(word).join(rep);
};
console.log(
  replaceAllOcurrenceStr(
    "hello world, I love you all. I mean you are my all in all",
    "all",
    "ah"
  )
);
