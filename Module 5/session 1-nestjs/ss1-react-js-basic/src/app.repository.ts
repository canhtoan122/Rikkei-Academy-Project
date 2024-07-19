import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRepository {
    private users = [
        {
            id:1,
            name: "toan",
            age: 24
        },
        {
            id:2,
            name: "cao",
            age: 19
        }
    ]
    getHello() {
        return 'Hello from Rikkei EDU!';
    }
    getUser() {
        return this.users;
    }
}
