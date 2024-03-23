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



// console.log(coffeeFetched)
// async function fetched(fetchWhat){
//     fetch(url)
//         .then(response => response.json())
//         .then(r => {
//             let fetched
//             for (let i in r){
//                 console.log(i)
//                 if(i === fetchWhat){
//                     fetched = i;
//                 }
//                 // r.fetchedName
//             }
//             console.log(r[fetched])
//             let fetchResult = r[fetched];
//             return fetchResult
//         })
//         .catch(e => console.log(e))
// }

async function fetched(){
    let fetchedCoffee;
    let fetchResult;
    fetch(url)
        .then(response => response.json())
        .then(r => {

            for (let i in r){
                console.log(i)
                if(i === 'coffee'){
                    fetchedCoffee = i;
                }
                // r.fetchedName
            }
            console.log(r[fetchedCoffee]);
            fetchResult = r[fetchedCoffee];
            console.log(fetchResult)
        })
    return fetchResult
        // .catch(e => console.log(e))
}



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
        .then(json=> {
            console.log(json)
            let q = fetched()
            console.log(q)
        })
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

    const nameFetched = fetched('name')
        .then(r => r)
        .catch(e=> console.log(e))
    const coffeeFetched = fetched('coffee')
        .then(r => r)
        .catch(e=> console.log(e))

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


