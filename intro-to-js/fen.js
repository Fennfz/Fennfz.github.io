// function getmyname(){
//     alert('Plaese')
//   }


function askMyname(){
  const name = prompt('Please enter your name', "Parima");
  if (name !=null){
    document.getElementById('myname').innerHTML = "My name is " + name;
  }
}

function helloWorld(){
  const h1message = document.getElementById('myname').innerHTML
  
  alert(h1message + ' ซุปเปอร์วาเลนไทน์')
}