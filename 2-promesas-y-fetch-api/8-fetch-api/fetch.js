// #1
// fetch('https://reqres.in/api/users')
//     .then(resp => {
//         resp.json().then(console.log)
//     })

// #2
fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(console.log)

// La función #1 y #2 hacen lo mismo
