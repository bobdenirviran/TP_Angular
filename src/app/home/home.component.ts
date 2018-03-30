import {ConnectService} from '../services/connect.service';
import {ActivatedRoute} from '@angular/router';
import {MyEventService} from '../services/myevent.service';
import { Component, OnInit } from '@angular/core';
import {CategLiteral, Categs} from '../models/Categs';
import { Users } from '../models/Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MyEventService] // Déclare le service qui sera utilisé

})
export class HomeComponent implements OnInit {

  categs: Categs[] = [];
  public user: Users;

  constructor(private MyEventService: MyEventService, private LoginService: ConnectService, private activatedRoute: ActivatedRoute ) {
    this.user = this.LoginService.getUser();
  }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe(
      (data) => {
        const id: number = data.id_categ;
        this.retrieveAllCategs();
      },
      (error) => {
        console.log ( error );
      }
    )
  }

  retrieveAllCategs() 
  {
    this.MyEventService.getAllCategs().subscribe(
      (data) => {
        if(data.success){
          this.populateCategs(data.categs);
        }
      },
      (error)=> {
        console.log(error);
      });
  }

  populateCategs( categs: CategLiteral[]) 
  {
    for( let categ_json of categs) {
      const categ: Categs = new Categs(
        categ_json.label
      );
      categ.setId(categ_json.id);
      this.categs.push(categ);
    }
  }

}
