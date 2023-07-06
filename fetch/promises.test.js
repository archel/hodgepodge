const { fetchPikachu, fetchInvalidUrl, promisifiedTimeout } = require("./promises.js") 

describe('Promises should', () => {
    it('resolves a promise when the callback goes well', async () => {
        const callback = () => {
            console.log('Hello world')
        }
        const promise = promisifiedTimeout(1, callback)

        await expect(promise).resolves.not.toThrow();
    })

    it('rejects a promise when the callback have an error', async () => {
        const callback = () => {
            throw new Error()
        }
        const promise = promisifiedTimeout(1, callback)

        await expect(promise).rejects.not.toThrow();
    })

    it('fetches a pokemon', async () => {
        const pikachu = fetchPikachu()

        expect(pikachu).resolves.toMatchObject({
            id: 25,
            name: "pikachu"
        })
    })

    it('rejects the promise when having an error on fetch', async () => {
        const pikachu = fetchInvalidUrl()

        await expect(pikachu).rejects.toMatchObject({
            message: 'Pokemon not found'
        })
    })
})