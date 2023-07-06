// Promise docs https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
//Create a version of setTimeout function that returns a promise
// Hint you can create a promise using new promise, the constructor receives a
// Callback with 2 functions reject and resolve
// If all goes good call resolve, otherwise call reject.
const promisifiedTimeout = (time, callback) => {
    return null
}


// Fetch docs https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const fetchPikachu = async () => {
    // Call fetch function to get pikachu
    //url: https://pokeapi.co/api/v2/pokemon/pikachu
    // Hint: remember that to get the body of the resonse you need to
    // concatenate a .then after fetch and call json method on the response.
    return null
}

const fetchInvalidUrl = async () => {
    // Call fetch function to get non existent pokemon
    //url: https://pokeapi.co/api/v2/pokemon/asdf
    // Hint: Use promises .catch function to return the error you want
    return null
}

module.exports = {
    fetchPikachu,
    fetchInvalidUrl,
    promisifiedTimeout
}




