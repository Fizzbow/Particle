/*
//侧边栏
var btn = document.getElementById("btn");
var control = document.getElementById("control");

/!*
btn.addEventListener('click', function(e){
	control.classList.toggle("slide");
}, false);
*!/

//粒子选择
var ball = document.getElementById("ball");
var rect = document.getElementById("rect");


function chose(particleName){
    particleName.addEventListener('click', function(e){
        this.style.backgroundColor = "orange";
        (particleName == ball ? rect : ball).style.backgroundColor = "rgba(0, 0, 0, 0)";
        type = (type === "ball" ? "rect" : "ball");
        change();
    }, false);
}

chose(ball);
chose(rect);
*/



//实现功能：切换按钮和背景颜色点击按钮出现对应的页面,点击按钮变色
let backInput = document.getElementById('backgroundInput');
let shapeInput = document.getElementById('shapeInput');

let shapeSidebar = document.getElementById('shapeSidebar');
let backgroundSidebar = document.getElementById('backgroundSidebar')

backInput.addEventListener('click', changeB =()=> {
    console.log('背景颜色按钮');
    shapeSidebar.style.display = 'none';
    backgroundSidebar.style.display = 'block';

    shapeInput.style.background = 'white';
    backInput.style.background = 'orange';
},false);


shapeInput.addEventListener('click',changeS =(e)=>{
    console.dir(e.target);
    shapeSidebar.style.display = 'block';
    backgroundSidebar.style.display = 'none';

    shapeInput.style.background = 'orange';
    backInput.style.background = 'white';
})

//节流
/*function debounce(fn){
    let timeout = null;
    return function (){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            fn.apply(this,arguments);
        },1000)
    }
}*/
//实现功能：点击色块出现相应的canvasBox颜色
let red = document.querySelector('.boxRed');
let green = document.querySelector('.boxGreen');
let yellow = document.querySelector('.boxYellow');

let backgroundCanvas = document.getElementById('canvasBox');

const changeRed= () => {
    //console.log(red)
    backgroundCanvas.style.background = '#f44336';
}
const changeGreen =() => {
    //console.log(green);
    backgroundCanvas.style.background = '#8BC34A'
}
const changeYellow =() => {
    //console.log(yellow);
    backgroundCanvas.style.background = '#FFC107'
}
red.addEventListener('click',changeRed);
green.addEventListener('click',changeGreen);
yellow.addEventListener('click',changeYellow);