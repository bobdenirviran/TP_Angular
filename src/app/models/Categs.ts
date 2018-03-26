export class Categs
{
    private id: number;
    private label: string;

    constructor(label: string)
    {
        this.label = label;
    }

    public getId() : number
    {
        return this.id;
    }
    public getLabel() : string
    {
        return this.label;
    }
    public setId( id:number ) : void 
    {
        this.id = id;
    }
    public setLabel(label:string) : void
    {
        this.label = label;
    }
}
export interface CategLiteral {
    id: number,
    label: string
}