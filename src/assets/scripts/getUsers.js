export default function getUsers () {
  return fetch('https://api.github.com/users').then(response => response.json())
}
