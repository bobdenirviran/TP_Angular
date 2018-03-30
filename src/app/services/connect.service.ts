import { Injectable } from '@angular/core';
import { Users, UserLiteral } from '../models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface UserJson {
  success: boolean,
  id: number,
  username: string
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

  private user: Users = Users.empty();
  private user_id: number;
  private username: string;

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): Users {
    console.log(this.user_id);
      const storageUser: string = sessionStorage.getItem("user");
      if( storageUser && ! this.user_id ){
          const jsonuser: { username: string, user_id: number } = JSON.parse( storageUser );
          this.user = new Users( jsonuser.username, ""  );
          this.user.setId(jsonuser.user_id);
          this.user.setUsername(jsonuser.username);
      }
      return this.user;
  }
}