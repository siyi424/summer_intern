//右下角button提交跳转百度
let btn = document.getElementById('btn');
btn.addEventListener(
    'click',
    function () {
        return window.location.href = 'http://www.baidu.com';
    },
    false
);



//校验
let tooltips = document.getElementsByClassName('tooltip-text');
let Clicked = [0, 0, 0, 0, 0];



class Checks {
    constructor(id, i) {
        this.id = id;
        this.i = i;
    }

    
    check(){
        let input_byID = document.getElementById(this.id);
        let i = this.i;

        function set_visibility(i, flag) {
            if (flag) {
                tooltips[i].style.visibility = 'hidden'; 
            } else {
                tooltips[i].style.visibility = 'visible';
            };
        }
        

        input_byID.addEventListener(
            'change',
            function (event) {
                if (i == 0) {
                    let patt = /^[\da-z]+$/i;
                    this.length = event.target.value.length;
                    var flag = 4 <= this.length && this.length <= 16 && patt.test(event.target.value);
                } else if (i == 1) {
                    this.length = event.target.value.length;
                    var flag = this.length >= 6 && this.length <= 16;
                } else if (i == 2) {
                    const code_value = document.getElementById('code').value;
                    var flag = code_value == event.target.value;
                } else if (i == 3) {
                    let patt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    var flag = patt.test(event.target.value);
                } else {
                    this.length = event.target.value.length;
                    var flag = 2 <= this.length && this.length <= 16;
                };

                set_visibility(i, flag);
                Clicked[i] += 1;
                
            }   
        )
    }
            
}





//校验用户名
const username = new Checks('username', 0);
username.check();

//校验密码输入
const code = new Checks('code', 1);
code.check();


// 校验第二次输入密码
const check_code = new Checks('check-code', 2);
check_code.check();

//校验email
const email = new Checks('email', 3);
email.check();

//校验昵称
const nickname = new Checks('nickname', 4);
nickname.check();


//注册按钮，显示所有不达标的任务
//如果有Clicked 仍未0，表示该input框没有被点击过


function final_check() {
    for (let i = 0; i < Clicked.length; i++) {
        if (Clicked[i] == 0)
        tooltips[i].style.visibility = 'visible';
        }
    };

let reg = document.getElementById('reg');
reg.addEventListener(
    'click',
    final_check
);



