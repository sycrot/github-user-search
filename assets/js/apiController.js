const input = document.querySelector('.search--input')

const datauserInit = document.querySelector('.datauser--init')
const datauserNotfound = document.querySelector('.datauser--notfound')
const devfinderDatauser = document.querySelector('.devfinder--datauser')

const avatar = document.querySelector('.peopleinformation--image img')
const identityName = document.querySelector('.identity--name')
const identityUsername = document.querySelector('.identity--username')
const identityJoineddate = document.querySelector('.identity--joineddate')
const bio = document.querySelector('.bio--pbio')
const numbersNumrepos = document.querySelector('#numbers-numrepos')
const numbersNumfollowers = document.querySelector('#numbers-numfollowers')
const numbersNumfollowing = document.querySelector('#numbers-numfollowing')

const listitemLocation = document.querySelector('#listitem-location')
const listitemBlog = document.querySelector('#listitem-blog')
const listitemTwitter = document.querySelector('#listitem-twitter')
const listitemUser = document.querySelector('#listitem-user')

init()
function init() {
    datauserInit.classList.add('datauser--active')
    devfinderDatauser.classList.remove('datauser--active')
    datauserNotfound.classList.remove('datauser--active')
}
function getData(user) {

    let dat = fetch(`https://api.github.com/users/${user}`)
    let res = dat.then(res => res.json())
    
    res.then(jsonData => {
        if (jsonData.message === 'Not Found') {
            input.classList.add('search--inputnot')
            datauserInit.classList.remove('datauser--active')
            devfinderDatauser.classList.remove('datauser--active')
            datauserNotfound.classList.add('datauser--active')
        } else {
            input.classList.remove('search--inputnot')
            datauserInit.classList.remove('datauser--active')
            datauserNotfound.classList.remove('datauser--active')
            devfinderDatauser.classList.add('datauser--active')
            let data = {}
            data = {
                avatar_url : jsonData.avatar_url,
                name: jsonData.name,
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
                updated_at : jsonData.updated_at,
                twitter_username : jsonData.twitter_username
            }
            if (data == undefined) {
                console.log('null')
            }

            let date = new Date(jsonData.created_at)
            date = dateFormat(date)

            avatar.setAttribute('src', data.avatar_url)
            identityName.innerHTML = data.name
            identityUsername.innerHTML = `@${data.login}`
            identityJoineddate.innerHTML = date
            bio.innerHTML = data.bio
            numbersNumrepos.innerHTML = data.public_repos
            numbersNumfollowers.innerHTML = data.followers
            numbersNumfollowing.innerHTML = data.following

            if (data.location == null) {
                listitemLocation.classList.add('listitem-notavailable')
                listitemLocation.innerHTML = 'Not Available'
            } else {
                listitemLocation.innerHTML = data.location
            }

            if (data.twitter_username == null) {
                listitemTwitter.classList.add('listitem-notavailable')
                listitemTwitter.innerHTML = 'Not Available'
            } else {
                listitemTwitter.innerHTML = data.twitter_username
            }

            if (data.blog === "") {
                listitemBlog.classList.add('listitem-notavailable')
                listitemBlog.innerHTML = 'Not Available'
            } else {
                listitemBlog.innerHTML = data.blog
            }

            listitemUser.innerHTML = `@${data.login}`
            listitemUser.setAttribute('href', data.html_url)
        }
    })
    .catch(err => {
        console.log(err)
    })
}

inputEntry()
function inputEntry() {
    input.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            getData(input.value)
        }
    })
}

function dateFormat(date) {
    let months = ["Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"]
    let dateFormat = 'Entrou em ' + ((date.getDate())) + " de " + months[(date.getMonth())] + ' de ' + date.getFullYear()
    return dateFormat
}