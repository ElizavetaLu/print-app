const request = require('supertest');
const supertest = require('supertest');


describe('Order routes', () => {

    describe('Make order', () => {

        test('If no files were uploaded return 400 and error message', async () => {
            // const response = await request('http://localhost:5050').post('/makeOrder')


            const response = await request('http://localhost:5050')
                .post('/makeOrder')

                expect(response.statusCode).toBe(400);

            // expect(response.status).toEqual(400)
            // expect(response.body).toEqual({ "error": "No files were uploaded." })
        })
    })
})