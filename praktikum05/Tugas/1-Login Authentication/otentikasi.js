function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Yay2019" && password == "CARE"){
    alert ("Login Sukses");
    window.location = "index.html";
      }
      else{
        alert("Username atau Password salah");
        }
      return false;
      }