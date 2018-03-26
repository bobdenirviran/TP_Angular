export class Binds
{
    private id_user_bind: number;
    private id_event_bind: number;

    constructor( id_user_bind: number, id_event_bind: number )
    {
        this.id_user_bind = id_user_bind;
        this.id_event_bind = id_event_bind;
    }

    public getId_user_bind() : number
    {
        return this.id_user_bind;
    }
    public getId_event_bind() : number
    {
        return this.id_event_bind;
    }
    public setId_user_bind( id_user_bind:number ) : void 
    {
        this.id_user_bind = id_user_bind;
    }
    public setId_event_bind(id_event_bind:number) : void
    {
        this.id_event_bind = id_event_bind;
    }
}
export interface BindLiteral {
    id_user_bind: number,
    id_event_bind: number
}