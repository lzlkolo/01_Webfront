// break 확인
function check1() {
    
    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for (let i = 1; i <= 10; i++) {
        console.log("i : ", i);

        if (i == 5) break;
    }
}

// 무한 반복하는 while문 멈추기
function check2() {

    let i = 1;

    // i가 10 초과 시 멈춤
    while (true) {
        console.log("i : ", i++);

        if (i > 10) break;
    }
}

// continue 확인하기
function check3() {

    // 1부터 20까지 출력. 단, 3의 배수는 건너뛰기
    for (let i = 1; i <= 20; i++) {
        
        // 3의 배수인 경우
        if (i % 3 == 0) continue;

        console.log("i : ", i);
    }
}

/* 
1부터 30까지 1씩 증가하며 출력
단, 홀수 또는 10의 배수는 건너뛰기
 */
function check4() {

    for (let i = 1; i <= 30; i++) {

        if (i % 2 == 1 || i % 10 == 0) continue;

        console.log("i : ", i);
    }
}

/* 
0~9까지 5줄 출력
 - 각 줄에서 4의 배수는 건너뛰기
 - 3번째 줄 출력 후 멈추기

 01235679
 01235679
 01235679
*/
function check5() {

    // 5줄
    for (let i = 0; i <= 4; i++) {
        // 출력 문자열 초기화
        let str = "";

        // 0~9까지 출력 -> 4의 배수 건너뛰기
        for (let j = 0; j <= 9; j++) {
            if (j != 0 && j % 4 == 0) continue;
            str += j;
        }

        console.log(str);

        if (i == 2) break;
    }
}

// 게임 시작 버튼 -> 난수 생성 -> prompt : 1~100사이 숫자를 입력해주세요
// -> 입력할 떄마다 count 올리기
function startGame() {

    // 1~100 사이 랜덤번호 생성
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);

    // 입력 횟수 저장 변수
    let count = 0;
    
    // 입력 값 저장 변수
    let input; // undefined

    // 취소 누르기 전까지 반복
    while (input !== null) {
        input = prompt("1~100사이 숫자를 입력해주세요.");

        count++;
        
        if (input > randomNumber) {
            alert(`[DOWN] count : ${count}`);
        } else if (input < randomNumber) {
            alert(`[UP] count : ${count}`);
        } else {
            alert("성공!");
            break;
        }

        if (count > 4) {
            alert("실패");
            break;
        }
    }
}