import {get, save} from "./storage.js";

window.addStory = function(){
  const input = document.getElementById("storyInput");
  const user = get("loggedUser");

  if(!input.files[0]) return;

  const reader = new FileReader();

  reader.onload = function(){
    let stories = get("stories") || [];

    stories.push({
      user: user.user,
      image: reader.result,
      time: Date.now()
    });

    save("stories", stories);
  }

  reader.readAsDataURL(input.files[0]);
}