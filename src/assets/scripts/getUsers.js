export default function getUsers (start = 0) {
  let query = start ? `?since=${start}` : ''
  return fetch(`https://api.github.com/users${query}`).then(response => response.json())
}
