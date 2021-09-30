let server;//= require('../index') 
const request = require('supertest')
const addTask=require('../routes/addTask')

describe('POST /api/addTask',()=>{
    beforeEach(()=>{server=require('../index'); })
    afterEach(()=>{server.close();});
    it('add task to list',async()=>{
        const res = await request(server).post('/api/addTask');
        expect(res.status).toBe(200);
    })
})

const allTask=require('../routes/allTask')

describe('GET /api/allTask',()=>{
    beforeEach(()=>{server=require('../index'); })
    afterEach(()=>{server.close();});
    it('gives the all tasks',async()=>{
        const res = await request(server).post('/api/allTask');
        expect(res.status).toBe(200);
    })
})

