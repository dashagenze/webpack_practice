const button = document.getElementById('btn');
const title = document.getElementById('title');


const COFFEE_DATA = document.getElementById('COFFEE');
const SIZE_DATA = document.getElementById('SIZE');
const NAME_DATA = document.getElementById('NAME');

const img = document.getElementById('img');
document.body.style.backgroundColor = '';

const url = 'http://localhost:3000/coffeeOrder';


SIZE_DATA.style.display = 'none';
NAME_DATA.style.display = 'none';

fetch(url)
    .then(r => r.json())
    .then(json => console.log(json))
    .catch(e => console.log(e))


button.onclick = () => {
    // CLEAR THE BD
    fetch(url+'/1', {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(r => r.json())
        .then(json => console.log(json))
        .catch(e => {
            console.log(e)
        })
}



// GET COFFEE
COFFEE_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(COFFEE_DATA);

    const coffee = formData.get('coffee');
    postCoffee(coffee)
        .then(() => {
            SIZE_DATA.style.display = 'block';
            COFFEE_DATA.style.display = 'none';
        })
        .catch(e => console.log(e))

})

// GET SIZE
SIZE_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(SIZE_DATA);

    const size = formData.get('size');
    postSize(size)
        .then(() => {
            SIZE_DATA.style.display = 'none';
            NAME_DATA.style.display = 'block';
        })
        .catch(e => console.log(e))

})

// GET NAME
NAME_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(NAME_DATA);

    const name = formData.get('name');
    console.log(name);

    //404
    // fetch(url + '/1.coffee')
    //     .then(r => r.json())
    //     .then(json => console.log(json))
    //     .catch(e => console.log(e))
    // fetch(url + '/1')
    //     .then(r => r.json())
    //     .then(json => console.log(json))
    //     .catch(e => console.log(e)) //перенести на четыре строчки вниз

    postName(name)
        .then(() => {
            NAME_DATA.style.display = 'none';

            img.src = 'assets/coffeeBrewing.gif'
            document.body.style.backgroundColor = '#08343A';
            title.innerText = 'готовим ваш кофэ!!'

             setTimeout(() => {
                 img.src = 'assets/coffeeCup.gif'
                 document.body.style.backgroundColor = '#FFE31C';
                 title.innerText = `${nameFetched}, ваш ${coffeeFetched}, приходите еще!!`
             }, 10000)
        })
})


async function postCoffee(coffee) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            id: 1,
            coffee: coffee,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(r => r.json())
        .then(json => console.log(json))
        .catch(e => console.log(e))
}

async function postSize(size) {
    fetch(url+'/1', {
        method: 'PATCH',
        body: JSON.stringify({
            size: size,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(r => r.json())
        .then(json => console.log(json))
        .catch(e => console.log(e))

}

async function postName(name) {
    fetch(url+'/1', {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(r => r.json())
        .then(json => console.log(json))
        .catch(e => console.log(e))
}



