// 상태관리객체
const state = {
  randomNumber : [],

};

// 랜덤으로 중복되지 않는 세자리 숫자 생성


for (let i = 0; i<3; i++) {
  // 0-9까지 정수를 랜덤으로 생성
  let random = Math.floor(Math.random() * 10);
  // state.randomNumber가 random을 가지고 있을 경우 루프를 한번 더 순회한다
  if (state.randomNumber.includes(random)) {
    i--
  } else {
    // state.randomNumber가 random을 가지고 있지 않을 경우 생성한 수를 배열에 추가한다
    state.randomNumber.push(random)
  }
}

// test
document.getElementById('test').textContent = state.randomNumber


