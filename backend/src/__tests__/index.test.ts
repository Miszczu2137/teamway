import request from 'supertest';
import { Express } from 'express';
import { createServer } from '../server';
import { Test, questions, answers, results } from '../db';

describe('GET /tests', () => {
  let server: Express;

  beforeAll(async () => {
    server = await createServer();
  });

  it('should return 200 & valid response if request param list is empity', (done) => {
    const test: Test = {
      id: 1,
      name: 'Psychological Test',
      questions,
      answers,
      results
    };

    request(server)
      .get(`/tests`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject([ test ]);
        done();
      });
  });
});
