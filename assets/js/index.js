let data = {
}
function getData() {
    fetch('https://api.github.com/users/defunkt')
    .then(res => res.json())
    .then(jsonData => {
        setData({
            avatar_url : jsonData.avatar_url,
            bio : jsonData.bio,
            blog : jsonData.blog,
            created_at : jsonData.created_at,
            email : jsonData.email,
            followers : jsonData.followers,
            followers_url : jsonData.followers_url,
            following : jsonData.following,
            html_url : jsonData.html_url,
            url : jsonData.url,
            location : jsonData.location,
            login : jsonData.login,
            public_gists : jsonData.public_gists,
            public_repos : jsonData.public_repos,
            repos_url : jsonData.repos_url,
            updated_at : jsonData.updated_at
        })
    })
    .catch(err => {
        console.log(err)
    })
}
getData(data)

function setData(res) {
    data = res
    return data
}

console.log(data)