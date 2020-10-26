const xhr = new XMLHttpRequest();
// https://api.github.com/users/RegianeMachado
xhr.open('GET', 'https://api.github.com/users/RegianeMachado');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}