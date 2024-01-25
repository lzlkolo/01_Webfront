let x = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let y = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

document.addEventListener("keydown", function(e) {
    // 봄버맨 이미지
    const bomberman = document.getElementById("bomberman");

    switch(e.key) {
        case 'ArrowUp' : 
            y -= 10;
            break;

        case 'ArrowDown' : 
            y += 10;
            break;

        case 'ArrowLeft' : 
            x -= 10;
            break;

        case 'ArrowRight' : 
            x += 10;
            break;

        case 'x' : 
            const box = document.getElementById("box");
            box.innerHTML += 
                `<img src="/images/boom.png"
                style="transform: translate3d(${x}px, ${y}px, 0);
                position: absolute;">`;
                break;

        default : alert("방향키와 x만 가능"); break;
    }

    bomberman.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    
});