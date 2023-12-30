
function getPosts() {
  fetch("api/getPosts/")
    .then((response) => response.json())
    .then((titles) => {
      const postsList = document.getElementById("posts-list");
      postsList.innerHTML = ""; // Clear existing list

      titles.forEach((title) => {
        const postLink = document.createElement("a");
        postLink.href = `?title=${title}`;
        postLink.innerText = title;
        const listItem = document.createElement("li");
        listItem.appendChild(postLink);
        postsList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
}

function getPostContent(title) {

  fetch("api/getPostContent?title=" + title)
    .then((response) => response.json())
    .then((markdown) => {
      const postContentDiv = document.getElementById("post-content");
      postContentDiv.innerHTML = marked.parse(markdown); // Convert Markdown to HTML with configured options
    })
    .catch((error) => {
      console.error("Error fetching post content:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  if (title) {
    getPostContent(title);
    getPosts();
  } else {
    getPosts();
  }
});
