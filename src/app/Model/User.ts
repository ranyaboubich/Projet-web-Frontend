export class User {
    id = 0;
    username = '';
    email = '';
    password = '';
    isAdmin : boolean = false;

    constructor(id: number, email: string , username: string, password: string, isAdmin: boolean) {
        this.id = id;
        this.email= email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
