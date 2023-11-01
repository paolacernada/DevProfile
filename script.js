// URL for your GitHub profile
const profileUrl = 'https://api.github.com/users/paolacernada';

fetch(profileUrl)
  .then(response => response.json())
  .then(data => {
    updateProfile(data);
  });

function updateProfile(profileData) {
  const avatarImage = document.querySelector('.avatar img');
  avatarImage.src = profileData.avatar_url;

  const nameElement = document.querySelector('.info h1');
  nameElement.textContent = profileData.name;

  const locationElement = document.querySelector('#location');
  locationElement.textContent = profileData.location;

  const githubUrlElement = document.querySelector('#github-url a');
  githubUrlElement.href = profileData.html_url;
  githubUrlElement.textContent = 'paolacernada';
  const githubUsernameElement = document.querySelector('#github-username');
  githubUsernameElement.textContent = profileData.login;
}

// URL for GitHub Repos
const reposUrl = 'https://api.github.com/users/paolacernada/repos';

fetch(reposUrl)
  .then(response => response.json())
  .then(data => {
    updateRepositories(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function updateRepositories(repositories) {
  const tableBody = document.querySelector('table tbody');
  repositories.forEach(repo => {
    const row = document.createElement('tr');
    const repoNameCell = document.createElement('td');
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-book');
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = " " + repo.name;
    repoNameCell.appendChild(icon);
    repoNameCell.appendChild(repoLink);
    repoNameCell.classList.add('icon');
    row.appendChild(repoNameCell);
    tableBody.appendChild(row);
  });
}
