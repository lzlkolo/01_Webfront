// 아이디 정규표현식
// 비밀번호 일치여부
// 이름 2~5글자
// 전화번호 정규표현식
// 이메일 ?.?

// 다 제대로 채워졌으면 alert("회원가입 완료")

const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");


// 아이디 검사
document.getElementById("id").addEventListener("keyup", e => {

    // 정규표현식
    const regExp = /^[a-z][a-zA-Z0-9\-\_]{5,13}$/;

    // 빈칸 (초기화)
    if (e.target.value.length == 0) {
        id.style.backgroundColor = "";
        return;
    }

    // 유효성 검사
    if (regExp.test(e.target.value)) {
        id.style.backgroundColor = "springgreen";
    } else {
        id.style.backgroundColor = "";
    }
});


// 비밀번호 검사 -> 완
document.getElementById("password-check").addEventListener("keyup", () => {
    const span = document.getElementById("passwordResult");

    pw = password.value;
    pwCheck = passwordCheck.value;

    // 1. "비밀번호" 미입력한 상태에서 "비밀번호 확인" 작성
    if (pw.length == 0) {
        alert("비밀번호를 입력해주세요");
        passwordCheck.value = '';
        password.focus();
    }

    if (pw == pwCheck) {

        // 2. "비밀번호" 일치
        span.innerText = "비밀번호 일치";
        span.style.color = "green";
    } else if (pw != pwCheck) {

        // 3. "비밀번호" 불일치
        span.innerText = "비밀번호 불일치";
        span.style.color = "red";
    }
});


// 이름 검사
document.getElementById("name").addEventListener("keyup", e => {
    // 결과 출력 span
    const span = document.getElementById("nameResult");

    // 정규표현식
    const regExp = /^[가-힣]{2,5}$/;

    // 빈칸 (초기화)
    if (e.target.value.length == 0) {
        span.innerText = "";
        return;
    }

    // 유효성 검사
    if (regExp.test(e.target.value)) {
        span.innerText = "정상입력";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    
    } else {
        span.innerText = "한글만 입력하세요";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }

});

function validate() {
    // 성별
    
    console.log(document.getElementById("gender"));

    // 전화번호
    document.getElementById("phone");
}

validate();