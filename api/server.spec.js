const request = require('supertest');
const server = require('./server.js');

describe('server tests', function() {
	describe('GET /', function() {
		it('should return status 200', function() {
			return request(server).get('/').then((res) => {
				expect(res.status).toBe(200);
			});
		});
		it('should return correct messgae', function() {
			return request(server).get('/').then((res) => {
				expect(res.text).toEqual('{"message":"server is working"}');
			});
		});
	});
});
