function getPosts() {
    fetch("api/getPosts/")
      .then(response => response.json())
      .then(titles => {
        const postsList = document.getElementById("posts-list");
        postsList.innerHTML = "";
  
        titles.forEach(title => {
          const postLink = document.createElement("a");
          postLink.href = `#`;
          postLink.innerText = title;
          postLink.addEventListener("click", (e) => {
            e.preventDefault();
            getPostContent(title);
          });
  
          const listItem = document.createElement("li");
          listItem.appendChild(postLink);
          postsList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }
  
  function getPostContent(title) {
    const blobStoragePath = "https://publiclinuxcommandsweb.blob.core.windows.net/blogposts";
    const postUrl = `${blobStoragePath}/${title}.md`;
  
    fetch(postUrl)
      .then(response => response.text())
      .then(markdown => {
        const postContentDiv = document.getElementById("post-content");
        postContentDiv.innerHTML = marked.parse(markdown); // Convert Markdown to HTML
      })
      .catch(error => {
        console.error("Error fetching post content:", error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    getPosts();
  });
  