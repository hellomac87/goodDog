# logic

- 문제를 만든다
  - 숫자를 랜덤으로 생성해야한다
  - 숫자를 3개를 입력받는다
  - 1 <= 9 까지 숫자이며, 중복되지 않는 수
  - 자료구조를 선택한다 : 배열
    - 랜덤으로 숫자를 생성한다
    - 배열에 넣는다
- 입력값을 받아서 submit되면 그값을 저장한다
  - 게임상태에 저장한다
---


## 상태관리
> 상태를 만들거나 업데이트하고 업데이트된 상태를 화면에 반영한다
>
- 게임에서 사용되는 데이터를 하나의 객체로 관리한다
- 자료구조를 만든다
  - 게임 상태를 관리하기 쉽게 게임 상태들을 담아놓을 객체를 만든다
  - 변수에 게임상태(객체)를 저장한다
  - 게임상태에는(예를들면)
    - 유저의 입력값
    - 랜덤으로 생성되는 수들
    - 다뤄야 할 데이터(상태)가 생기면 객체에 담아 관리한다
- 상태가 업데이트되면 화면에 그린다
