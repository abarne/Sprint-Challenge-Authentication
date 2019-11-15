//const db = require('../data/dbConfig.js');
const request = require('supertest');
const server = require('../api/server.js');

describe('Jokes Router', function() {
	describe('GET /', function() {
		it('should call a GET method', function() {
			return request(server).get('/').then((res) => {
				expect(res.request.method).toBe('GET');
			});
		});
		it('should return status 200 on fetching', function() {
			return request(server).get('/', { accept: 'application/json' }).then((res) => {
				expect(res.status).toBe(200);
			});
		});
	});
});
