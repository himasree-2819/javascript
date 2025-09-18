// Arrow function for fetching and displaying posts
const loadPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const tbody = document.querySelector("#postsTable tbody");

    posts.slice(0, 5).forEach(post => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td data-label="ID">${post.id}</td>
        <td data-label="Title">${post.title}</td>
        <td data-label="Body">${post.body}</td>
      `;

      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

// Call the arrow function
loadPosts();
