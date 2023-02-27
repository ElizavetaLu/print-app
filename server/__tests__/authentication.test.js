const request = require('supertest')
// const db = require('')
const jwt = require("jsonwebtoken");
const config = require("../config");
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.sign({ sub: user.id, iat: timestamp }, config.secret)
};




describe('Authentication routes', () => {
    // beforeAll(async () => await db.connect());
    // afterEach(async () => await db.clear());
    // afterAll(async () => await db.close());

    describe('Sign In', () => {
        test('Send token for signed in user', () => {
            const user = {
                _id: {
                    $oid: "63e641d012dc8059eb390eaf"
                },
                email: "12323@gmail.com",
                password: "$2b$10$5vHc8H0MhoDvy.VwKsNg9em1aWcUXyPp8V5fXYf/BmP7.IpIxw9Sm",
                __v: 0
            }
            request('http://localhost:5050')
                .post('/signin')
                .set('Content-type', 'application/json')
                .send(user)
                .expect(200, (err, data) => { })
                // .end()
            // .post('/signin').send(user)

            // expect(response.body).toEqual({ "token": tokenForUser(user) })
        })
    })

    describe('Sign Up', () => {

        test('Send a status of 422 if no email or password provided', async () => {
            const response = await request('http://localhost:5050').post('/signup')

            expect(response.status).toEqual(422)
            expect(response.body).toEqual({ "error": "You must provide email and password" })
        })
    })
})