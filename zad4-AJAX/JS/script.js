const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then(data => {
        for (let user of data) {
            let pID = document.createElement('p');
            let pName = document.createElement('p')
            let pWebsite = document.createElement('p')

            pID.innerText = `User ID: ${user.id}`
            pName.innerText = `User Name: ${user.name}`
            pWebsite.innerHTML = `User URL: ${user.website}<br />------`

            let body = document.body;

            body.appendChild(pID);
            body.appendChild(pName);
            body.appendChild(pWebsite);
        }
    })
    .catch(error => {
        console.log(error);
    })
}

const scrollToEndOfPage = () => {

    let d =document.documentElement;

    //wysokość całej strony
    let scrollHeight = d.scrollHeight;

    //ile już przeskrolowano
    let scrollTop = d.scrollTop;

    //wysokość widoczna
    let clientHeight = d.clientHeight;

    if (scrollHeight <= Math.ceil(scrollTop + clientHeight)) {
        getData();
    }
   
}

window.addEventListener('scroll', scrollToEndOfPage)