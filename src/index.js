
// 상태관리객체
const state = {
  randomNumber : [],
  userInput : [],
  mung : 0,
  nyam : 0,
};

function init(){
  // 게임 상태 및 화면 초기화 함수
  state.randomNumber = []; // 문제 배열을 비운다.
  createRandomNumber(); // 랜덤으로 중복되지 않는 세자리 숫자 생성
  stateInit(); // 상태초기화 함수 실행
  drawList();
  document.querySelector('.correct-modal').classList.remove('show');
  document.querySelector('.fail-modal').classList.remove('show');
}

function stateInit(){
  // 상태 초기화 함수
  state.userInput = [];
  state.nyam = 0;
  state.mung = 0;
}

function createRandomNumber(){
  // 랜덤으로 중복되지 않는 세자리 숫자 생성
  for (let i = 0; i < 3; i++) {
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
  // text
  // document.getElementById('test').textContent = state.randomNumber;
  // 모달 정답창에 정답 쓰기
  document.getElementById('modalAnswer').textContent = state.randomNumber;
}

// 상태업데이트
document.querySelector('.game-try-button').addEventListener('click', e => {
  e.preventDefault();
  if (document.querySelectorAll('.game-try-list li').length === 9){
    document.querySelector('.fail-modal').classList.add('show');
    return;
  }
  // input값이 비어있으면 출력하지 않는다
  if (document.querySelector(".game-input-1").value === "" || document.querySelector(".game-input-10").value === "" || document.querySelector(".game-input-100").value === "") {
    alert("값을 입력하시개");
    return;
  }
  //클릭 이벤트가 일어나면 input값을 가져와서 업데이트한다
  document.querySelectorAll('.game-form input').forEach((input, index) => {
    state.userInput.push(parseInt(input.value));
  });

  if (isWin()){
    // 승리시
    document.querySelector('.correct-modal').classList.add('show');
  }

  drawList();

  //가져온 input값이 화면에 출력되면, 초기화한다
  stateInit();
});

// 화면에 출력
function drawList() {
  if (state.userInput[0] === undefined && state.userInput[1] === undefined && state.userInput[2] === undefined){
    document.querySelector('.game-try-list').innerHTML = ''
    return;
  }

  const listtemplete = `<li>
        <input value="${state.userInput[0]}" type="text" class="game-input-1" maxlength="1" readonly>
        <input value="${state.userInput[1]}" type="text" class="game-input-10" maxlength="1" readonly>
        <input value="${state.userInput[2]}" type="text" class="game-input-100" maxlength="1" readonly>
        <span class="nyam">${state.nyam} 냠</span>
        <span class="mung">${state.mung} 멍</span>
      </li>`;
  document.querySelector('.game-try-list').insertAdjacentHTML("beforeend", listtemplete);
}

// :: user input click event listener
document.querySelector('.game-form').querySelectorAll('input').forEach(inputElem => {
  inputElem.addEventListener('click', (e) => {
    // 클릭시 값을 빈 문자열로 만든다. :: 유저가 입력을 편하게 하기 위해
    inputElem.value = '';
  });
});

// :: game-retry-button click event listener
document.querySelector('.game-retry-button').addEventListener('click', (e) => {
  e.preventDefault();
  init();
});

// :: 모달창 버튼 클릭 이벤트
// 다시하기 버튼
document.querySelector('.modal-retry-button').addEventListener('click', (e) => {
  init();
  document.querySelector('.correct-modal').classList.remove('show');
});
// 닫기 버튼
document.querySelector('.modal-close').addEventListener('click', (e) => {
  document.querySelector('.correct-modal').classList.remove('show');
});

function isWin() {
  console.log(state.randomNumber);
  console.log(state.userInput);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j && state.randomNumber[i] === state.userInput[j]) {
        state.nyam++;
      }
      if (i !== j && state.randomNumber[i] === state.userInput[j]) {
        state.mung++;
      }
    }
  }
  console.log(`${state.nyam} nyam`);
  console.log(`${state.mung} mung`);

  if(state.nyam === 3){
    return true;
  }
}

init();
