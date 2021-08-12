let HTML = document.querySelector('#HTML');
let style = document.querySelector('#style')
let string = ` /*你好,我是一名前端新人，    
*接下来我演示下我的前端功底
*首先我要准备一个div*/
#div1{
border:1px solid red;
width:200px;
height:200px;
}
/*接下来是演示八卦图
*第一步，将正方形变成圆形**/
#div1{
border-radius:50%;
box-shadow:0 0 3px rgba(0,0,0,0.5);
border:none;
}
/*第二步： 一半黑，一半白
采用背景渐变的形式 **/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);}
/*第三步：加入两个小圆形*/
#div1::before{
width:100px;
height:100px;
top:0;
transform:translateX(50%);
border-radius:50%;
background:black;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);

}
#div1::after{
width:100px;
height:100px;
bottom:0;
transform:translateX(50%);
border-radius:50%;
background:white;
background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%);
}

`;
//为什么注释：因为css对body有影响，要先注释掉
let string2 = ""; // 方便对内容加样式，所以重新创建了一个变量
let n = -1;
let step = () => {
    setTimeout(() => {
        n = n + 1;
        if (string[n] === "\n") { // 如果是回车，就不照搬

            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n]; // 如果不是回车，就照搬
        }

        // 以上代码可简化 如下
        // string2 += string[n] === "\n" ? "</br>" : string[n];
        HTML.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 100000);
        HTML.scrollTo(0, 10000); //加入滚动条，帮用户自动滚动显示内容；
        // 不能用string2,因为css里面不能出现HTML标签

        if (n < string.length - 1) {
            step();
        }
    }, 0);
}
step();
// 实现style
// setTimeout(() => {
//     style.innerHTML = `
// body {
// color: red;
// }`;
// }, 3000)