// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.pageX + 'px';
//   cursor.style.top = e.pageY + 'px';
// })

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

const token = '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';
const username = 'gnlehc';
const query = `
  query {
    user(login: "${username}") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
          }
        }
      }
    }
  }
`;

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ query }),
})
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document.getElementById('projectsContainer');
    const projects = data.data.user.pinnedItems.nodes;

    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `
        <div class="border border-gray-300 p-4 rounded-md shadow-md">
          <h2 class="text-lg font-semibold">${project.name}</h2>
          <p class="mt-2">${project.description}</p>
          <a class="mt-2 text-blue-500" href="${project.url}" target="_blank">View on GitHub</a>
        </div>
      `;

      projectsContainer.appendChild(projectElement);
    });
  })
  .catch(error => {
    console.error('Error fetching GitHub projects:', error);
  });

// const token = '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'
// const username = 'gnlehc';
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

// fetch('https://api.github.com/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
//   body: JSON.stringify({ query }),
// })
//   .then(response => response.json())
//   .then(data => {
//     const projectsContainer = document.getElementById('projectsContainer');
//     const projects = data.data.user.pinnedItems.nodes;

//     projects.forEach(project => {
//       const projectElement = document.createElement('div');
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
//   .catch(error => {
//     console.error('Error fetching GitHub projects:', error);
//   });

// var splashScreen = document.querySelector('.splash')
// splashScreen.addEventListener('click', () => {
//   splashScreen.style.opacity = 0;
//   setTimeout(() => {
//     splashScreen.classList.add('hiddens')
//   }, 610)
// })

// window.addEventListener('load', () => {
//   const splashHeader = document.querySelector('.splash-header');
//   const textArray = ['Welcome!', 'Loading...', 'Preparing...', 'Hi There!'];
//   let currentIndex = 0;

//   function updateText() {
//     splashHeader.textContent = textArray[currentIndex];
//     currentIndex = (currentIndex + 1) % textArray.length;
//   }

//   setInterval(updateText, 1500);
// });

// window.addEventListener('load', () => {
//   const splashScreen = document.querySelector('.splash');
//   const splashHeader = document.querySelector('.splash-header');
//   const textArray = ['Welcome!', 'Loading...', 'Preparing...', 'Hi There!'];
//   let currentIndex = 0;

//   function updateText() {
//     if (currentIndex < textArray.length) {
//       splashHeader.textContent = textArray[currentIndex];
//       currentIndex++;
//     } else {
//       // Hide the splash screen after displaying the last text
//       splashScreen.style.opacity = 0;
//       setTimeout(() => {
//         splashScreen.classList.add('hiddens');
//       }, 610);
//     }
//   }

//   // Start changing text
//   setInterval(updateText, 1000);
// });

// const token = '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';
// const username = 'gnlehc';

// // Fetch pinned repositories using the GitHub GraphQL API
// const query = `
//     query {
//       user(login: "${username}") {
//         pinnedItems(first: 6, types: [REPOSITORY]) {
//           nodes {
//             ... on Repository {
//               name
//               description
//               url
//             }
//           }
//         }
//       }
//     }
//   `;

// // Fetch pinned repositories using the GitHub GraphQL API
// fetch('https://api.github.com/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
//   body: JSON.stringify({ query }),
// })
//   .then(response => response.json())
//   .then(data => {
//     const projectsContainer = document.getElementById('projectsContainer');
//     const projects = data.data.user.pinnedItems.nodes;

//     // <img class="w-20 h-20 rounded-full mx-auto" alt="${project.name} Avatar">
//     projects.forEach(project => {
//       const projectElement = document.createElement('div');
//       projectElement.innerHTML = `
//         <div class="border border-gray-300 p-4 rounded-md shadow-md">
//           <h2 class="text-lg font-semibold">${project.name}</h2>
//           <p class="mt-2">${project.description}</p>
//           <a class="mt-2 text-blue-500" href="${project.url}" target="_blank">View on GitHub</a>
//         </div>
//       `;
//       projectElement.setAttribute('data-repo', project.name);

//       projectsContainer.appendChild(projectElement);
//     });

//     // Fetch repository avatars using the GitHub REST API
//     projects.forEach(project => {
//       fetch(`https://api.github.com/repos/${username}/${project.name}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then(response => response.json())
//         .then(repoData => {
//           const projectElement = projectsContainer.querySelector(`[data-repo="${project.name}"]`);
//           const avatarImage = projectElement.querySelector('img');

//           if (repoData.owner && repoData.owner.avatar_url) {
//             avatarImage.src = repoData.owner.avatar_url;
//             avatarImage.alt = `${project.name} Avatar`;
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching GitHub repository:', error);
//         });
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching GitHub projects:', error);
//   });

// const projectsContainer = document.querySelector(".grid");

// async function fetchGitHubProjects() {
//   try {
//     const response = await fetch("https://api.github.com/users/gnlehc/repos");
//     const projects = await response.json();

//     projects.forEach((project) => {
//       const projectCard = document.createElement("div");
//       projectCard.classList.add("bg-gray-100", "p-4", "rounded", "shadow-md");

//       const projectTitle = document.createElement("p");
//       projectTitle.textContent = project.name;
//       projectTitle.classList.add("font-bold", "text-lg", "mb-2");

//       const projectDescription = document.createElement("p");
//       projectDescription.textContent = project.description || "No description available";
//       projectDescription.classList.add("text-gray-600");

//       const projectLink = document.createElement("a");
//       projectLink.textContent = "View on GitHub";
//       projectLink.href = project.html_url;
//       projectLink.classList.add("text-blue-500", "hover:underline", "block", "mt-2");

//       projectCard.appendChild(projectTitle);
//       projectCard.appendChild(projectDescription);
//       projectCard.appendChild(projectLink);
//       projectsContainer.appendChild(projectCard);
//     });
//   } catch (error) {
//     console.error("Error fetching GitHub projects:", error);
//   }
// }

// fetchGitHubProjects();


// const token = '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';

// // Your GitHub username
// const username = 'gnlehc';

// // Fetch projects using the GitHub GraphQL API
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

// // Fetch projects using Fetch API
// fetch('https://api.github.com/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
//   body: JSON.stringify({ query }),
// })
//   .then(response => response.json())
//   .then(data => {
//     const projectsContainer = document.getElementById('projectsContainer');
//     const projects = data.data.user.pinnedItems.nodes;

//     projects.forEach(project => {
//       const projectElement = document.createElement('div');
//       projectElement.innerHTML = `
//       <div class="border border-gray-300 p-4 rounded-md shadow-md">
//         <h2 class="text-lg font-semibold">${project.name}</h2>
//         <p class="mt-2">${project.description}</p>
//         <a class="mt-2 text-blue-500" href="${project.url}" target="_blank">View on GitHub</a>
//       </div>
//     `;

//       projectsContainer.appendChild(projectElement);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching GitHub projects:', error);
//   });