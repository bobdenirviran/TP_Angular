import {ActivatedRoute} from '@angular/router';
import {MyEventService} from '../services/myevent.service';
import { Component, OnInit } from '@angular/core';
import {CategLiteral, Categs} from '../models/Categs';
import { SaveUserId } from '../models/SaveUserId';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MyEventService] // Déclare le service qui sera utilisé

})
export class HomeComponent implements OnInit {

  categs: Categs[] = [];
  public id_user: number;

  constructor(private MyEventService: MyEventService, private activatedRoute: ActivatedRoute, private saveuserid: SaveUserId ) {
    this.id_user = saveuserid.getSaveUserId();
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
