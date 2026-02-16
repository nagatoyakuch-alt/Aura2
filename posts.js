import {get, save} from "./storage.js";

window.createPost = function(){
  const text = document.getElementById("postText").value;
  const user = get("loggedUser");

  let posts = get("posts") || [];

  posts.unshift({
    id: Date.now(),
    user: user.user,
    text,
    likes: [],
    comments: []
  });

  save("posts", posts);
  loadFeed();
}

window.loadFeed = function(){
  const feed = document.getElementById("feed");
  const posts = get("posts") || [];

  feed.innerHTML = posts.map(p=>`
    <div class="post">
      <h4>${p.user}</h4>
      <p>${p.text}</p>
      <button onclick="likePost(${p.id})">
        👍 ${p.likes.length}
      </button>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", loadFeed);