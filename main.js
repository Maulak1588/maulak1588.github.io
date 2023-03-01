let url = 'https://jsonplaceholder.typicode.com/users'
const datos = fetch(url)
    .then(res => res.json())
    .then(info => mostrarData(info))
    .catch(err =>console.log(err))

function mostrarData(info) {
    console.log(info)
    document.getElementById('name').innerHTML = info[0].name
    document.getElementById('mail').innerHTML = info[0].email
    document.getElementById('phone').innerHTML = info[0].phone
    document.getElementById('firstName').innerHTML = info[0].name.split(' ')[0]
}