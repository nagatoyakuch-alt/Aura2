import {get} from "./storage.js";

window.logout = function(){
  localStorage.removeItem("loggedUser");
  window.location="index.html";
}

const user = get("loggedUser");

if(user && document.getElementById("userDisplay")){
  document.getElementById("userDisplay").innerText = user.user;
}