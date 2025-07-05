const request = require('supertest');
const app = require('../app'); 
const db = require('../db');   



describe('Task API', () => {
  beforeAll(async () => {
    await db.query('DELETE FROM task'); // Clear tasks before testing
  });

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task', description: 'Testing task API' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual('Test Task');
  });

  it('should get recent tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeLessThanOrEqual(5);
  });

  it('should mark task as done', async () => {
    const create = await request(app)
      .post('/tasks')
      .send({ title: 'Done Test', description: 'Will be done' });
    const res = await request(app).put(`/tasks/${create.body.id}/done`);
    expect(res.statusCode).toEqual(204);
  });
});
