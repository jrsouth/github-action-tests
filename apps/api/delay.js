const delay = (sec) => {
  return new Promise((res) => {
    setTimeout(res, sec * 1000);
  })
};

console.log('Delaying...');
await delay(120);
console.log('Done.');
