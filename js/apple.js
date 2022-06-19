
// const ata = () => {
//     const Color = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + Color;
//     color.innerHTML = "#" + Color;
//   }
  
//   genNew.addEventListener("click", ata);
//   ata();
//   task3 end;;;;

function Change(){
  
   
var names=document.getElementById('names').value
var pass=document.getElementById('pass').value
var email=document.getElementById('email').value


if (names==null || names==""){  
  alert("Name can't be blank");  
  return false;  
}

if (!(names==null || names=="")){  
     if(names.length>=4){
      alert("Ugurla Kecdiniz")
     }
     else{
      alert("Sertler odenilmiyib")
    }
}


}
