import {get, save} from "./storage.js";

window.addNotification = function(text){
  let notifications = get("notifications") || [];

  notifications.unshift({
    text,
    time: Date.now()
  });

  save("notifications", notifications);
}