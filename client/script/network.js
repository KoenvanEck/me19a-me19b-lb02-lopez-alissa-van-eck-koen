const SERVER = 'http://localhost/3300';

function sendForm(data){
    return fetch(SERVER+'/bzz/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.text())
        .catch(err => {
            console.log(`Error occurred: ${err}`)
        })
}
