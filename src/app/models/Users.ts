export class Users
{
    private id: number;
    private username: string;
    private password: string;

    constructor(username: string, password: string)
    {
        this.username = username;
        this.password = password;
    }

    public getId() : number
    {
        return this.id;
    }
    public getUsername() : string
    {
        return this.username;
    }
    public getPassword() : string
    {
        return this.password;
    }
    public setId( id: number ) : void 
    {
        this.id = id;
    }
    public setUsername( username: string ) : void
    {
        this.username = username;
    }
    public setPassword( password: string ) : void
    {
        this.password = password;
    }
}
export interface UserLiteral {
    id: number,
    username: string,
    password: string
}