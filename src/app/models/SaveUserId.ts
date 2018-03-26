import { Injectable } from "@angular/core";

@Injectable()

export class SaveUserId
{
    private saveuserid: number;

    public getSaveUserId() : number
    {
        return this.saveuserid;
    }
    public setSaveUserId( id:number ) : void 
    {
        this.saveuserid = id;
    }
}