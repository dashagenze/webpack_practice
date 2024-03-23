const url = 'http://localhost:3000/orders/1';

const COFFEE_DATA = document.getElementById('COFFEE');
const SIZE_DATA = document.getElementById('SIZE');
const NAME_DATA = document.getElementById('NAME');
const button = document.getElementById('btn');

SIZE_DATA.style.display = 'none';
NAME_DATA.style.display = 'none';

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(e => console.log(e))


async function postCoffee(coffee) {
    await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            coffee: coffee,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(json=> {console.log(json)})
        .catch(e=> console.log(e))
}

async function postSize(size) {
    await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            size: size,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(json=> console.log(json))
        .catch(e=> console.log(e))
}

async function postName(name) {
    await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(json=> console.log(json))
        .catch(e=> console.log(e))
}


/////////////////-------------- FORMS---------///////////

// GET COFFEE
let coffee
COFFEE_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(COFFEE_DATA);
    coffee = formData.get('coffee');

    if (!coffee) {
        alert('пожалуйста, скажите какой вы хотели бы кофе!')
    } else {
        postCoffee(coffee)
            .then(() => {
                SIZE_DATA.style.display = 'block';
                COFFEE_DATA.style.display = 'none';
            })
            .catch(e => console.log(e))
    }
})

// GET SIZE
let size
SIZE_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(SIZE_DATA);
    size = formData.get('size');

    if (!size) {
        alert('пожалуйста, подскажите какого объема хотели бы напиток!')
    } else {
        postSize(size)
            .then(() => {
                SIZE_DATA.style.display = 'none';
                NAME_DATA.style.display = 'block';
            })
            .catch(e => console.log(e))
    }
})



// GET NAME
let name
NAME_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(NAME_DATA);
    name = formData.get('name');

    if (!name) {
        alert('простите, не расслышала ваше имя! повторите, пожалуйста?')
    } else {
        postName(name)
            .then(() => {
                NAME_DATA.style.display = 'none';

                img.src = 'assets/coffeeBrewing.gif'
                document.body.style.backgroundColor = '#08343A';
                title.innerText = 'готовим ваш кофэ!!'

                setTimeout(() => {
                    img.src = 'assets/coffeeCup.gif'
                    document.body.style.backgroundColor = '#FFE31C';
                    title.innerText = `${name}, вот ваш ${coffee}, приходите еще!!`
                }, 10000)
            })
    }
})


