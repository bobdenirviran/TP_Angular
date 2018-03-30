import { Component, OnInit } from '@angular/core';
import { MyEventService } from "../services/myevent.service";
import { Categs, CategLiteral } from "../models/Categs";
import { ActivatedRoute, Router } from "@angular/router";
import { ConnectService } from '../services/connect.service';
import { Users } from '../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private $input_username: HTMLInputElement;
  private $input_password: HTMLInputElement;

  private userid: number = -1; // stock l'id récupérée après la saisie username
  private username: string = "";
  private password: string = "";

  constructor (private loginService: ConnectService, private route: Router) {
  }

  ngOnInit(): void {

    this.$input_username = document.getElementById('username') as HTMLInputElement;
    this.$input_password = document.getElementById('password') as HTMLInputElement;

  }

  checkUsername()
  {
    this.loginService.getUserExist(this.username).subscribe(
      (data) => {
        if(data.success)
        {
          this.userid = data.id;
        }
        else
        {
          this.userid = -1
          this.$input_username.value = "";
          this.$input_username.setAttribute( 'placeholder', 'bad username');
          this.$input_username.focus();
        }
      },
      (error) => {
        console.log("erreur requete utilisateur impossible")
      }
    )
  }
  login()
  {
    {
      this.loginService.getUserConnect( this.userid, this.password ).subscribe(
        (data) => { console.log(data.id, data.username );
          if(data.success)
          {
            this.userid = -1;
            this.userid = data.id;
            //Stockage en sessionstorage
            let store_id: number = data.id;
            let storage = {user_id: store_id, username: data.username};
            let sessionstorage = sessionStorage.setItem( "user", JSON.stringify(storage ));
            this.route.navigate(["home"]);
          }
          else
          {
            this.$input_password.value = "";
            this.$input_password.setAttribute( 'placeholder', 'bad password');
            this.$input_password.focus();
          }
        },
        (error) => {
          console.log("erreur requete motdepasse")
        }
      )
    }
  }
}
