const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const menuClose = document.getElementById("menu-close");

menuToggle.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

menuClose.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

// const menuToggle = document.getElementById("menu-toggle");
// const sidebar = document.getElementById("sidebar");

// menuToggle.addEventListener("click", () => {
//   sidebar.classList.toggle("hidden");
// });

// const token =
//   "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";
// const username = "gnlehc";
// const query = `
//   query {
//     user(login: "${username}") {
//       pinnedItems(first: 6, types: [REPOSITORY]) {
//         nodes {
//           ... on Repository {
//             name
//             description
//             url
//           }
//         }
//       }
//     }
//   }
// `;

// fetch("https://api.github.com/graphql", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   },
//   body: JSON.stringify({ query }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     const projectsContainer = document.getElementById("projectsContainer");
//     const projects = data.data.user.pinnedItems.nodes;

//     projects.forEach((project) => {
//       const projectElement = document.createElement("div");
//       projectElement.innerHTML = `
//         <div class="border border-gray-300 p-4 rounded-md shadow-md">
//           <h2 class="text-lg font-semibold">${project.name}</h2>
//           <p class="mt-2">${project.description}</p>
//           <a class="mt-2 text-blue-500" href="${project.url}" target="_blank">View on GitHub</a>
//         </div>
//       `;

//       projectsContainer.appendChild(projectElement);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching GitHub projects:", error);
//   });
