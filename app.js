//JavaScript-assignment3-ch6to9
//Question no1
/*var a=10
document.write('Result'+'<br>'+'The value of a is'+a+'<br>')
document.write('.......................................'+'<br>')
++a;
document.write('The value of ++a is:'+a+'<br>')
document.write('Now the value of a is:'+a+'<br>')
console.log(a);
a++;
document.write('The value of a++ is:11'+'<br>')
document.write('Now the value of a is:'+a+'<br>')
console.log(a);
--a;
document.write('The value of --a is:'+a+'<br>')
document.write('Now the value of a is:'+a+'<br>')
console.log(a);
a--;
document.write('The value of a-- is:11'+'<br>')
document.write('Now the value of a is:'+a+'<br>')
console.log(a);*/
//Question no2
/*var a=2
var b=1
var result=--a - --b + ++b + b--;
console.log(result);
//first stage
--a;
console.log(a);
var calc=--a - --b;
console.log(calc);
var calc=--a - --b + ++b;
console.log(calc);
var num2=--a - --b + ++b + b--;
console.log(num2);
*/
//Question no3;
/*var user = prompt('enter your name');
alert('Hi'+user);*/
//Question no5
/*var user = +prompt('enter number')
if (user) {
  document.write(user + '×' + 1 + '=' + user * 1+'<br>')
  document.write(user + '×' + 2 + '=' + user * 2 +'<br>')
  document.write(user + '×' + 3 + '=' + user * 3+'<br>')
  document.write(user + '×' + 4 + '=' + user * 4 + '<br>')
  document.write(user + '×' + 5 + '=' + user * 5 + '<br>')
  document.write(user + '×' + 6+ '=' + user * 6 + '<br>')
  document.write(user + '×' + 7 + '=' + user * 7 + '<br>')
  document.write(user + '×' + 8+ '=' + user * 8 + '<br>')
  document.write(user + '×' + 9+ '=' + user * 9 + '<br>')
  document.write(user + '×' + 10+ '=' + user * 10 + '<br>')
} else {
  document.write(5 + '×' + 1 + '=' + 5 * 1+'<br>')
  document.write(5 + '×' + 2 + '=' + 5 * 2 +'<br>')
  document.write(5 + '×' + 3 + '=' + 5 * 3+'<br>')
  document.write(5 + '×' + 4 + '=' + user * 5 + '<br>')
  document.write(5 + '×' + 5 + '=' + 5 * 5 + '<br>')
  document.write(5 + '×' + 6+ '=' + 5 * 6 + '<br>')
  document.write(5 + '×' + 7 + '=' +5 * 7 + '<br>')
  document.write(5 + '×' + 8+ '=' + 5 * 8 + '<br>')
  document.write(5 + '×' + 9+ '=' +5 * 9 + '<br>')
  document.write(5+ '×' + 10+ '=' +5 * 10 + '<br>')
}*/
//Question no6
/*var subj1=+prompt('enter english marks')
var subj2=+prompt('enter urdu marks')
var subj3=+prompt('enter math marks')
var total=subj1+subj2+subj3;
var per1=(subj1*100)/100+'%'
var per2=(subj2*100)/100+'%'
var per3=(subj3*100)/100+'%'
var totalPer=(total*100)/300
document.getElementById('eng').innerHTML=
subj1;
document.getElementById('urdu').innerHTML=subj2;
document.getElementById('math').innerHTML=subj3;
document.getElementById('per1').innerHTML=per1;
document.getElementById('per2').innerHTML=per2;
document.getElementById('per3').innerHTML=per3;
document.getElementById('total').innerHTML=total;
document.getElementById('per').innerHTML=
Math.round(totalPer);*/