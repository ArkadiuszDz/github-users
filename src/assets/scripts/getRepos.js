export default function getRepos (user) {
  return fetch('https://api.github.com/users/' + user + '/repos').then(response => response.json())
}
