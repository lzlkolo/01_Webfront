const result = document.getElementById("result");
const fruit = document.getElementsByClassName("fruit");

document.getElementById("btn").addEventListener("click", () => {
    const apple = 2000;
    const banana = 3000;
    const melon = 5000;

    let aCount = 0;
    let bCount = 0;
    let mCount = 0;

    // 체크된 항목 확인
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i].checked) {
            switch (fruit[i].id) {
                case 'apple' : aCount++; break;
                case 'banana' : bCount++; break;
                case 'melon' : mCount++; break;
            }
        }
    }

    result.innerHTML = `사과 ${aCount}개 바나나 ${bCount}개 메론 ${mCount}개 총합`
});