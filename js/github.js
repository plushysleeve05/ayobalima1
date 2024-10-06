// Replace 'your-username' with your actual GitHub username
const username = "plushysleeve05";

// API URL to fetch repositories
const apiURL = `https://api.github.com/users/${username}/repos`;

// Function to fetch repositories
fetch(apiURL)
  .then((response) => response.json())
  .then((repos) => {
    const projectContainer = document.querySelector(".card-container");
    projectContainer.innerHTML = ""; // Clear out the placeholder cards

    repos.forEach((repo) => {
      // Create a new card for each repo
      const repoCard = document.createElement("div");
      repoCard.classList.add("card");

      // Create the card content with a placeholder image
      repoCard.innerHTML = `
        <div class="card-image">
          <img src="assets/images/card-image-option3.jpeg" alt="Placeholder Image" />
        </div>
        <div class="card-text">
          <a href="${repo.html_url}" target="_blank">
            <p>${repo.name}</p>
            <p>${repo.description || "No description available"}</p>
          </a>
        </div>
      `;

      projectContainer.appendChild(repoCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching GitHub repos:", error);
  });
