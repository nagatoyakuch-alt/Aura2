import {get, save} from "./storage.js";

window.likePost = function(id){
  const user = get("loggedUser");
  let posts = get("posts");

  posts = posts.map(p=>{
    if(p.id === id){
      if(!p.likes.includes(user.user)){
        p.likes.push(user.user);
      } else {
        p.likes = p.likes.filter(u=>u!==user.user);
      }
    }
    return p;
  });

  save("posts", posts);
  loadFeed();
}