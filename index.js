require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "Nikunjkumar123",
    "id": 120407180,
    "node_id": "U_kgDOBy1EjA",
    "avatar_url": "https://avatars.githubusercontent.com/u/120407180?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Nikunjkumar123",
    "html_url": "https://github.com/Nikunjkumar123",
    "followers_url": "https://api.github.com/users/Nikunjkumar123/followers",
    "following_url": "https://api.github.com/users/Nikunjkumar123/following{/other_user}",
    "gists_url": "https://api.github.com/users/Nikunjkumar123/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Nikunjkumar123/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Nikunjkumar123/subscriptions",
    "organizations_url": "https://api.github.com/users/Nikunjkumar123/orgs",
    "repos_url": "https://api.github.com/users/Nikunjkumar123/repos",
    "events_url": "https://api.github.com/users/Nikunjkumar123/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Nikunjkumar123/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Nikunj kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 31,
    "public_gists": 0,
    "followers": 1,
    "following": 5,
    "created_at": "2022-12-12T17:09:37Z",
    "updated_at": "2024-01-01T18:49:36Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('nikunjKumarVats')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login first<h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code<h2>')
})

app.get(('/github'),(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


