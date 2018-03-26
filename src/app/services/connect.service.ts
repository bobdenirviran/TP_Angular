import { Injectable } from '@angular/core';
import { Users, UserLiteral } from '../models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface UserJson {
  success: boolean,
  id: number
}

@Injectable()
export class ConnectService {
  
  private service_url: string = "http://localhost/APIS/TP_API/";

  constructor( private http: HttpClient ) {}

  getUserExist( username ): Observable<UserJson>
  {
    return this.http.get( this.service_url + "users/" + username ) as  Observable<UserJson> ;
  }

  getUserConnect( id, password ): Observable<UserJson>
  {
    return this.http.get( this.service_url + "users/" + id + "/" + password ) as  Observable<UserJson> ;
  }
}
// <?php
// $userController = new UserController();
// flight::route("GET /users/@username", [$userController, "getUserExist"]);
// flight::route("GET /users/@id/@password", [$userController, "getCheckPassword"]);

// <?php
// $bindController = new BindController();
// flight::route("OPTIONS /*", [$bindController, "preflight"]);
// // Récupération des liens évenements d'un utilisateur par l'id
// // localhost/APIS/TP_API/binds/users/2
// flight::route("GET /binds/users/@id_user", [$bindController, "getBindsByUserId"]);
// // Création du lien d'un évènement avec un utilisateur
// // localhost/APIS/TP_API/binds/users/2/events/9
// flight::route("GET /binds/users/@id_user/events/@id_event", [$bindController, "bindEventUser"]);
// // Suppression du lien d'un évènement avec un utilisateur
// // localhost/APIS/TP_API/unbinds/users/2/events/9
// flight::route("GET /unbinds/users/@id_user/events/@id_event", [$bindController, "unbindEventUser"]);