const lunch = ['가츠비', '쌈밥', '짬뽕지존', '버거킹', '쭈꾸미'];

const names = ['김정수', '이연승', '정호연'];

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 최댓값도 포함, 최솟값도 포함
}

const random = getRandomIntInclusive(0, names.length);

for (let i = 0; i < names.length; i++) {
  if (random === i) {
    console.log(names[i]);
  }
}
