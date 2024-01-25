export class User {
    id = 0;

    username = '';
    email = '';
    password = '';

    constructor(id: number, email: string , username: string, password: string) {
        this.id = id;
        this.email= email;
        this.username = username;
        this.password = password;

    }
}
