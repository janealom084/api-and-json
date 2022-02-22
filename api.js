function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(Response => Response.json())
        .then(data => console.log(data))
}

function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => displyUsers(data))
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(post => console.log(post));
}
function loadPotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(Response => Response.json())
        .then(potos => console.log(potos))
}

function displyUsers(data) {
    const ul = document.getElementById('usersName');
    for (const user of data) {
        console.log(user)
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);

    }
}

