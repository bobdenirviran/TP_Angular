import { Injectable } from '@angular/core';
import { MyEvents } from '../models/MyEvents';
import { Categs } from '../models/Categs';
import { Binds } from '../models/Binds';
// sert pour les requetes http Ajax
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MyEventLiteral } from '../models/MyEvents';
import { CategLiteral } from '../models/Categs';
import { BindLiteral } from '../models/Binds';

// déclaration d'un data-type schéma
interface EventJson {
  success: boolean,
  events: MyEventLiteral[] // 'events' nom de l'objet renvoyé par le service
}

interface CategJson {
  success: boolean,
  categs: CategLiteral[] // 'categs' nom de l'objet renvoyé par le service

}
interface BindJson {
  success: boolean,
  id_user_bind: number,
  id_event_bind: number
}

@Injectable()
export class MyEventService {

  private service_url: string = "http://localhost/APIS/TP_API/";

  constructor( private http: HttpClient ) { }

  getAllEvents(): Observable<EventJson>
  {
    return this.http.get( this.service_url + "events" ) as  Observable<EventJson> ;
  }

  getAllEventsByCategoryId( id_categ ): Observable<EventJson>
  {
    return this.http.get( this.service_url + "events/categs/" + id_categ ) as  Observable<EventJson> ;
  }

  getAllCategs(): Observable<CategJson>
  {
    return this.http.get( this.service_url + "categs" ) as  Observable<CategJson> ;
  }

  getAllBindsByUserId(id_user): Observable<EventJson>
  {
    return this.http.get( this.service_url + "binds/users/" + id_user ) as  Observable<EventJson> ;
  }

  addBind( binds: Binds ): Observable<BindJson>
  {
    return this.http.get( this.service_url + "binds/users/" + binds.getId_user_bind() + "/events/" + binds.getId_event_bind() ) as  Observable<BindJson> ;
  }

  deleteBind( binds: Binds ): Observable<BindJson>
  {
    return this.http.get( this.service_url + "unbinds/users/" + binds.getId_user_bind() + "/events/" + binds.getId_event_bind() ) as  Observable<BindJson> ;
  }

}
