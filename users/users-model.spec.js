const { add, find } = require('./users-model.js');

const db = require('../database/dbConfig.js');

describe('users-model', function() {
	describe('add', function() {
		beforeEach(async () => {
			await db('users').truncate();
		});

		it('should add a user', async function() {
			await add({ username: 'test', password: 'test' });

			const users = await db('users');

			expect(users[0].username).toBe('test');
		});
		it('user should be in the database with an ID', async function() {
			await add({ username: 'test', password: 'test' });

			const users = await db('users');

			expect(users[0].id).toBeDefined();
		});
	});
	describe('find', function() {
		beforeEach(async () => {
			await db('users').truncate();
		});
		it('should return users', async function() {
			await add({ username: 'test', password: 'test' });
			const users = await db('users');
			expect(users.length).toBe(1);
		});
		it('should inlude our added user', async function() {
			await add({ username: 'test', password: 'test' });
			const users = await db('users');
			expect(users[0].username).toBe('test');
		});
	});
});
