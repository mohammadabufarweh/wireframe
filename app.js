 
alert("Hello");

var m = 'This is Mohammad webpage';
alert(m);

var m = prompt("5+5=?");
if (m == 10 ) {
alert ("GREAT JOB");
}
else {
alert ("please try again");
}
var m = prompt("Do you know bset car in this world ?");
if (m == 'yes' ) {
alert ("Tesla of course");
}
else {
alert ("you should see my page");
}
 prompt("please type your name" ,"mohammad abufarweh");
window.confirm("Thanks a lot");
document.write("this is document write");
console.log(5 + 6);

while (type !='tesla model x' && type !='tesla model s'  && type !='tesla model y' ) {
    var type = prompt("please select one type of these","tesla model x or tesla model s or tesla model y");
    
}

var input =prompt("how many car you want to buy","your order should be less than 10");
document.write(input);
for (var i=0; i <input; i=i+1) {
  if (type =='tesla model x') {
    document.write('<img style="width:100%" src= "https://tesla-cdn.thron.com/delivery/public/image/tesla/3863f3e5-546a-4b22-bcbc-1f8ee0479744/bvlatuR/std/1200x628/MX-Social" />');
  }
  else if ((type =='tesla model s')) {   document.write('<img style="width:100%" src= "https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop" />');
      
  }
  else {
    document.write('<img style="width:100%" src= "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-tesla-model-y-mmp-1-1604701558.jpg?crop=0.707xw:1.00xh;0.125xw,0&resize=640:* "/>');
  }
    console.log(input)
    console.log(type)
    document.write(type);
  }
  document.write(type);
