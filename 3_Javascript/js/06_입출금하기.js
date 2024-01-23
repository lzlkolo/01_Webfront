// prompt 사용 연습
function test() {
    // prompt에 입력한 값이 password에 저장됨
    const password = prompt("비밀번호를 입력하세요.");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if (password == null) { // 취소 버튼
        alert("취소");

    } else { // 확인 버튼

       if (password == 1234) {
        alert("비밀번호 일치");
       } else {
        alert("비밀번호 불일치!");
       }
    } 
}


// -----------------------------------------
const output = document.getElementById("output"); // 잔액 출력 span
const amount = document.getElementById("amount"); // 금액 작성 input

let balance = 10000; // 잔액 기록 변수 (초기값 100000)
const password = '1234'; // 비밀번호 저장 변수

output.innerText = balance;

function deposit() {
    if (amount.value.length == 0) {
        alert("금액을 입력해주세요.");

    } else {
        balance += Number(amount.value);
        output.innerText = balance;
        amount.value = '';
    }
}

function withdrawal() {

    if (amount.value.length == 0) {
        alert("금액을 입력해주세요.");

    } else {
        const password = prompt("비밀번호를 입력하세요.");
        
        if (password == null) {
            alert("취소");

        } else {
            // 비밀번호가 일치하지 않을 경우
            if (password != 1234) {
                alert("비밀번호가 일치하지 않습니다.");

            } else {  // 비밀번호가 일치하는 경우
                const money = Number(amount.value);

                if (money > balance) {
                    alert("출금 금액이 잔액보다 클 수 없습니다.");
    
                } else {
                    balance -= money;
                    output.innerText = balance;
                    amount.value = '';

                    alert(`${money}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
                }
            }
        }
    }
}