export class User {
    private id: number;
    private name: string;
    private firstName: string;

    constructor(id: number,
                name: string,
                firstName: string) {
        this.id = id;
        this.name = name;
        this.firstName = firstName;
    }
}
