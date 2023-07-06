// Promise docs https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises

const promisifiedTimeout = (time, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                callback()
                resolve()
            } catch (err) {
                console.log('xx')
                reject()
            }
        }, time)
    })
}


// Fetch docs https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const fetchPikachu = async () => {
    // Call fetch function to get pikachu
    //url: https://pokeapi.co/api/v2/pokemon/pikachu
    // Hint: remember that to get the body of the resonse you need to
    // concatenate a .then after fetch and call json method on the response.
    return fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(res => res.json())
}

const fetchInvalidUrl = async () => {
    // Call fetch function to get non existent pokemon
    //url: https://pokeapi.co/api/v2/pokemon/asdf
    // Hint: Use promises .catch function to return the error you want
    return fetch('https://pokeapi.co/api/v2/pokemon/asdf')
        .then(res => {
            if (!res.ok) {
                throw new Error("Pokemon not found")
            }
            return res
        })
}

module.exports = {
    fetchPikachu,
    fetchInvalidUrl,
    promisifiedTimeout
}




