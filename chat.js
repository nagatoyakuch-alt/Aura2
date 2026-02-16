import {get, save} from "./storage.js";

window.sendMessage = function(target, text){
  if(!text) return;

  const user = get("loggedUser");
  let chats = get("chats") || [];

  chats.push({
    from: user.user,
    to: target,
    text,
    time: Date.now()
  });

  save("chats", chats);
}