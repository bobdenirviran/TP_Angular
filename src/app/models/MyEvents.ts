export class MyEvents
{
    private id: number;
    private name: string;
    private datedeb: Date;
    private datefin: Date;
    private place: string;
    private latitude: number;
    private longitude: number;
    private id_categ: number;
    private bind: boolean; // flag de participation du user à l'event

    constructor(name: string, datedeb: Date, datefin: Date, place: string, latitude: number, longitude: number, id_categ: number, bind: boolean = false)
    {
        this.name = name;
        this.datedeb = datedeb;
        this.datefin = datefin;
        this.place = place;
        this.latitude = latitude;
        this.longitude = longitude;
        this.id_categ = id_categ;
        this.bind = bind; // flag de participation du user à l'event
    }

    public getId() : number
    {
        return this.id;
    }
    public getName() : string
    {
        return this.name;
    }
    public getDatedeb() : Date
    {
        return this.datedeb;
    }
    public getDatefin() : Date
    {
        return this.datefin;
    }
    public getPlace() : string
    {
        return this.place;
    }
    public getLatitude() : number
    {
        return this.latitude;
    }
    public getLongitude() : number
    {
        return this.longitude;
    }
    public getId_categ() : number
    {
        return this.id_categ;
    }
    public getBind() : boolean
    {
        return this.bind;
    }
    public setId( id:number ) : void
    {
        this.id = id;
    }
    public setName(name:string) : void
    {
        this.name = name;
    }
    public setDatedeb(datedeb:Date) : void
    {
        this.datedeb = datedeb;
    }
    public setDatefin(datefin:Date) : void
    {
        this.datefin = datefin;
    }
    public setPlace(place:string) : void
    {
        this.place = place;
    }
    public setLatitude(latitude:number) : void
    {
        this.latitude = latitude;
    }
    public setLongitude(longitude:number) : void
    {
        this.longitude = longitude;
    }
    public setId_categ(id_categ:number) : void
    {
        this.id_categ = id_categ;
    }
    public setBind(bind:boolean) : void
    {
        this.bind = bind;
    }

}
export interface MyEventLiteral {
    id: number,
    name: string,
    datedeb: Date,
    datefin: Date,
    place: string,
    latitude: number,
    longitude: number,
    id_categ: number,
    bind: boolean
}
