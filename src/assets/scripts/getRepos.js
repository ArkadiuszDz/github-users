export default function getRepos (user, page = 1) {
  let pageQuery = page === 1 ? '' : `&page=${page}`
  return fetch(`https://api.github.com/users/${user}/repos?per_page=100${pageQuery}`).then(response => response.json())
}
