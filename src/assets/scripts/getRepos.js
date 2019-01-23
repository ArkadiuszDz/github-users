export default function getRepos (user) {
  return fetch(`https://api.github.com/users/${user}/repos?per_page=100`).then(response => response.json())
}
