document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('make-request');
    const body = document.body;

    function makeRequest() {
        const link = randomElement(Array('https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicod.com/tdos/1'));

        fetch(link)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response is not ok' + response.statusText);
                } 
                return response.json();
            })
            .then(data => {
                document.body.style.background = 'green';
                console.log(data);
            })
            .catch(error => {
                document.body.style.backgroundColor = 'red';
                console.log('Ошибка:', error);
            })
    };

    function randomElement(arr) {
        if(!Array.isArray(arr) || arr.length === 0) {
            return undefined;
        }
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    button.addEventListener('click', makeRequest);
})


