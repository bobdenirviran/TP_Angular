import { Component, OnInit } from '@angular/core';
import { MyEventService } from "../services/myevent.service";
import { Categs, CategLiteral } from "../models/Categs";
import { ActivatedRoute, Router } from "@angular/router";
import { ConnectService } from '../services/connect.service';
import { SaveUserId } from '../models/SaveUserId';
import { Users } from '../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConnectService] // Déclare le service qui sera utilisé
})
export class LoginComponent implements OnInit {

  private $input_username: HTMLInputElement;
  private $input_password: HTMLInputElement;

  private userid: number=-1; // stock l'id récupérée après la saisie username
  private username: string;
  private password: string;

  constructor (private loginService: ConnectService, private route: Router, private saveuserid: SaveUserId) {
  }

  ngOnInit(): void {

    this.$input_username = document.getElementById('username') as HTMLInputElement;
    this.$input_password = document.getElementById('password') as HTMLInputElement;

  }

  checkUsername()
  {
    this.loginService.getUserExist(this.username).subscribe(
      (data) => {
        console.log("username checked", data);
        if(data.success)
        {
          this.userid = data.id;
        }
        else
        {
          console.log("Username inconnu");
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
        (data) => {
          if(data.success)
          {
            console.log("User connecté");
            this.userid = -1;
            this.saveuserid.setSaveUserId(data.id)
            this.route.navigate(["home"]);
          }
          else
          {
            console.log("Password incorrect");
            this.$input_password.value = "";
            this.$input_password.setAttribute( 'placeholder', 'bad password');
            this.$input_password.focus();
          }
        },
        (error) => {
          console.log("erreur requete motdepasse impossible")
        }
      )
    }
  }
}
