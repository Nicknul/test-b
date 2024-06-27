const lunchBu = document.querySelector('button');
const lunchDiv = document.querySelector('div');

const lunch = [
  '가츠비',
  '쌈채우리',
  '짬뽕지존',
  '버거킹',
  '손의손',
  '국수나무',
  '김가네',
  '대박분식',
  '수통골촌두부',
  '돈가츠모다',
  '우리손칼국수',
  '인생곰탕',
  '도군샤브',
  '도군함박',
  '안동본가국밥',
  '묵은정',
];

const names = ['김정수', '이연승', '정호연'];

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 최댓값도 포함, 최솟값도 포함
}

lunchBu.addEventListener('click', () => {
  const random = getRandomIntInclusive(0, lunch.length);
  console.log(random);
  for (let i = 0; i < lunch.length; i++) {
    if (random === i) {
      lunchDiv.textContent = lunch[i];
    }
  }
});
