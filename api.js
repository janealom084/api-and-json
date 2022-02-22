function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(Response => Response.json())
        .then(data => console.log(data))
}

function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => console.log(data))
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