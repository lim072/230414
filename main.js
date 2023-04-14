let img = document.querySelector(".showBox img");
let hOne = document.querySelector("h1");
let str = document.querySelector("strong");
let sp = document.querySelector("span");
let btns = document.querySelectorAll(".btns li");

let total = btns.length;

sp.innerText = total;

for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click",function(e){
        e.preventDefault(); //a태그가 가지고 있는 링크 이벤트를 막는것

        str.innerText = i + 1;
        //strong태그에 클릭한 인덱스 + 1 에 해당하는 숫자를 써줍니다

        //클릭한 li안의 a태그에 있는 href속성값을 변수에 담습니다
        let imgSrc = btns[i].querySelector("a").getAttribute("href");
        let txt = btns[i].querySelector("a").innerText;
        hOne.innerText = txt;

        //imgSrc에 변수로 담은 이미지 주소를 클릭한 img의 src에 대체합니다
        img.setAttribute("src", imgSrc)

        //활성화 클래스 on을 이용해서 클릭한 버튼에 on을 붙여서 css를 변경해줍니다

        // for(let el of btns){
        //     el.classList.remove("on");
        // }
        // btns[i].classList.add("on");

        for(let k=0; k<btns.length; k++){
            btns[k].classList.remove("on")
        }
        btns[i].classList.add("on")
    })
}