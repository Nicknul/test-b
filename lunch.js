const lunch = ['가츠비', '쌈밥', '짬뽕지존', '버거킹', '쭈꾸미'];

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 최댓값도 포함, 최솟값도 포함
}

const random = getRandomIntInclusive(0, lunch.length);

for (let i = 0; i < lunch.length; i++) {
  if (random === i) {
    console.log(lunch[i]);
  }
}
