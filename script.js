// var a = document.getElementById('div1');
// var p2 = document.getElementById('p2');
// var x = document.createElement('p');
// var y = document.createTextNode('besinci paragraf');

// x.appendChild(y);

// a.insertBefore(x, document.getElementById("p3"));
// a.replaceChild(y,p2);

// document.getElementById('div1').style.fontSize = '30px';

// var x = document.getElementsByTagName('p');

// for(i = 0; i < x.length; i++){

//     x[i].style.color = 'white';
// }

// var x = window.confirm('Yaxci oglansanmi?');

// if(x){
//     alert('xosum geldi')
// }else{
//     alert('get e get qadan alim')
// }

// function pencereAc(){
//     window.open('http://www.youtube.com','_blank');
// }
// function artirma(){
//     var a = document.getElementById('text').value;
//     a = Number(a);
//     a += 1;
//     document.getElementById('text').value = a;
// }

// function azaltma(){
//     var a = document.getElementById('text').value;
//     a = Number(a);
//     a -= 1;
//     document.getElementById('text').value = a;
// }

// var text;

// function rengYarat(){
//     var a = 'ABCDEF0123456789';
//     text = '#'; 

//     for(i = 0; i < 6; i++){
//         var random = Math.round(Math.random() * 15);

//         text += a.charAt(random);
//     }

// }

//     setInterval(function(){
//         rengYarat();
//         document.getElementById('arxa').style.backgroundColor = text;

//     }, 2000);
// var date = new Date();
// var saat, deqiqe, saniye;

// saat = date.getHours();
// deqiqe = date.getMinutes();
// saniye = date.getSeconds();

// setInterval(function(){

//     document.getElementById('saat').innerHTML = saat;
//     document.getElementById('deqiqe').innerHTML = deqiqe;
//     document.getElementById('saniye').innerHTML = saniye++;
//     if(saniye >= 60){
//         saniye = 0;
//         deqiqe++;
//     }
//     if(deqiqe >=60){
//         deqiqe = 0;
//         saat++;
//     }
//     if(saat >=23){
//         saat = 0;
//         deqiqe =0;
//     }

// }, 1000);

// var saat = 0;
// var deqiqe = 0;
// var saniye = 10;

// var a = setInterval(function(){
//     document.getElementById('saat').innerHTML = saat;
//     document.getElementById('deqiqe').innerHTML = deqiqe;
//     document.getElementById('saniye').innerHTML = saniye--;

//     // if(saniye == 0){
//     //     deqiqe--;
//     //     saniye = 59;
//     // }
//     if(Number(document.getElementById('saniye').innerHTML)== 0){
//         deqiqe--;
//         saniye = 59;
//     }
//     if(Number(document.getElementById('deqiqe').innerHTML) == 0 &&
//     Number(document.getElementById('saniye').innerHTML) == 0){
//         saat--;
//         deqiqe = 59;
//     }
// },1000); 

var text;

function sekilSec(){
    var a = ['pic1.jfif','pic2.jpg','pic3.jpg','pic4.jfif','pic5.jfif'];
    text = "";

    var random = Math.round(Math.random() * 4);

    text = a[random];
}

setInterval(function(){
    sekilSec();
    document.getElementById('img').src = text;
}, 3000);

var user = [{userName: 'admin', password: 'admin'},
            {userName: 'javascript', password:'1234'},
            {userName: 'Fazil', password: '3f305556'}];

var enteredUsername;
var enteredPassword;
var x;

function idareEt(){
    enteredUsername = document.getElementById('userName').value;
    enteredPassword = document.getElementById('password').value;
    
    for(x of user){
        if((x.userName == enteredUsername) && (x.password == enteredPassword)){
            return true;
        }else{
            return false;
        }
    }
}

function loginConfirm(){
    idareEt();
    if(idareEt()){
        window.open('https://www.youtube.com/watch?v=0dLFu2rE2L4&ab_channel=ilyasnn','_self');
    }else{
        alert('Gördün alınmır çoxda şey eləmə');
    }
}