export default function getUser (user) {
  return fetch('https://api.github.com/users/' + user).then(response => response.json())
}
