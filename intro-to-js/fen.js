

function askMyname(){
  const name = prompt('Please enter your name', '');
  if (name !=null){
    document.getElementById('myname').innerHTML = "Hi! " + name;
  }
}

function helloWorld(){
  const h1message = document.getElementById('myname').innerHTML
  
  alert(h1message + ' ซุปเปอร์วาเลนไทน์')
}

function calAge(){
  const age = prompt("What is you birth year", "");
  const d = new Date();
  let year = d.getFullYear();
  alert("ยินดีด้วย นายอยู่ในประเทศนี้มา " + (year - age) + " ปีแล้ว") 
}

function loadPeofile(){
  myName = "Fen" ;
  myProvince = "Canada" ;
  document.getElementById("my-name").innerHTML = myName ;
  document.getElementById("my-province").innerHTML = myProvince ;
}