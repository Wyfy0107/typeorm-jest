import { Connection, createConnection } from 'typeorm';
import { User } from '../src/entity/User';


describe('Index (e2e)', () => {
    let connection: Connection;

    beforeAll(async () => {
        connection = await createConnection();
    });


    afterAll(async () => {
        // TODO: clean db or something like that
    });

    test('should run', async () => {
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        await connection.manager.save(user);

        const loadedUser = await connection.manager.findOne(User);

        expect(loadedUser).toBeDefined()
    });
});