import {get, save} from "./storage.js";

window.addComment = function(id, text){
  if(!text) return;

  const user = get("loggedUser");
  let posts = get("posts");

  posts = posts.map(p=>{
    if(p.id === id){
      p.comments.push({user:user.user, text});
    }
    return p;
  });

  save("posts", posts);
  loadFeed();
}