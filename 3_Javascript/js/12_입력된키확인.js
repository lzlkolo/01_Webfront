// 문자열.toLowerCase() : 영어를 모두 소문자로 변경
// 문자열.toUpperCase() : 영어를 모두 소문자로 변경


// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 문서(화면 전체)에서 키가 눌러지는 걸 감지했을 때
document.addEventListener("keydown", function(e) {
    /** 방법1
     * 특정 키를 눌렀을 때
     * 입력된 키(e.key)가 배열의 i번째와 같으면 bgColor변경
     */
    // for (let i = 0; i < key.length; i++) {
    //     if (e.key == key[i].innerText.toLowerCase()) {
    //         key[i].style.backgroundColor = "deepPink";
    //     }
    // }

    // 방법2
    let idx; // 인덱스 값을 저장할 변수

    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toLowerCase) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return;
    }
    
    // idx 번호와 일치하는 keys배열 요소의 배경색 변경
    keys[idx].style.backgroundColor = "deepPink";
});

// 키를 떼면 배경색 흰색으로 되돌리기
document.addEventListener("keyup", function(e) {
    // 방법1
    // for (let i = 0; i < keys.length; i++) {
    //     if (e.key == keys[i].innerText.toLowerCase()) {
    //         keys[i].style.backgroundColor = "white";
    //     }
    // }

    // 방법2
    switch(e.key.toLowerCase) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return;
    }
    
    // idx 번호와 일치하는 keys배열 요소의 배경색 변경
    keys[idx].style.backgroundColor = "white";
});