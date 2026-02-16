import {get, save} from "./storage.js";

window.followUser = function(target){
  const current = get("loggedUser");
  let users = get("users");

  users = users.map(u=>{
    if(u.user === current.user){
      u.following = u.following || [];
      if(!u.following.includes(target)){
        u.following.push(target);
      }
    }
    return u;
  });

  save("users", users);
}