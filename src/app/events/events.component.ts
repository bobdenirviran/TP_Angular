import { Component, OnInit, Input } from '@angular/core';
import { MyEventService } from '../services/myevent.service';
import { MyEvents, MyEventLiteral } from '../models/MyEvents';
import { Categs, CategLiteral } from '../models/Categs';
import { Binds, BindLiteral } from '../models/Binds';
import { SaveUserId } from '../models/SaveUserId';

// routes parameter
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events', // c'est la balise du composant en lui même
  templateUrl: './events.component.html', // c'est l'affichage du composant
  styleUrls: ['./events.component.css'], // c'est le style du composant
  providers: [ MyEventService ] // Déclare le service qui sera utilisé
})
export class EventsComponent implements OnInit
{

  mybinds: Binds[] = [];
  myevents: MyEvents[] = [];
  my_used_event: MyEvents = new MyEvents("", new Date(), new Date(), "", 0, 0, 0);

  @Input() public myevent: MyEvents;
  public id_user: number;

  constructor(private MyEventService: MyEventService, private activatedRoute: ActivatedRoute, private saveuserid: SaveUserId )
  {
    this.id_user = saveuserid.getSaveUserId();
  }

  ngOnInit(): void
  {
    this.activatedRoute.params.subscribe(
      (data) => {
        this.myevents = [];
        this.mybinds = [];
        const id: number = data.id_categ;
        this.retrieveAllBindsByUser(this.id_user, () => {
          if(!id) {
            this.retrieveAllEvents( () => {
              console.log(this.myevents);
              for( let myevent of this.myevents)
              {
                for( let mybind of this.mybinds)
                {
                  if( mybind.getId_event_bind() == myevent.getId() )
                  {
                    myevent.setBind(true);
                  }
                }
              }
            })
          }
          else
          {
            this.retrieveAllEventsByCategoryId(id);
          }
        })
      },
      (error) => {
        console.log( error );
      }
    )
  }

  retrieveAllBindsByUser(id_user, callback: Function)
  {
    this.MyEventService.getAllBindsByUserId(id_user).subscribe(
      (data)=>{ console.log(data);
      if(data.success){
        this.populateBinds(data.events);
      }
      callback();
    },
    (error)=> {
      console.log( error );
    });
  }

  populateBinds( events: MyEventLiteral[] )
  {
    for( let mybind_json of events)
    {
      const mybind: Binds = new Binds(
        this.id_user,
        mybind_json.id
      );
      this.mybinds.push(mybind);
    }
    console.log(this.mybinds);
  }

  populateEvents( events: MyEventLiteral[] )
  {
    for( let myevent_json of events)
    {
      const datedeb: Date = new Date(myevent_json.datedeb);
      const datefin: Date = new Date(myevent_json.datefin);
      const myevent: MyEvents = new MyEvents(
        myevent_json.name,
        datedeb,
        datefin,
        myevent_json.place,
        myevent_json.latitude,
        myevent_json.longitude,
        myevent_json.id_categ,
        false
      );
      myevent.setId(myevent_json.id);
      this.myevents.push(myevent);
    }
    console.log(this.myevents);
  }

  retrieveAllEvents( callback: Function )
  {
    this.MyEventService.getAllEvents().subscribe(
      (data)=>{ console.log(data);
      if(data.success){
        this.populateEvents(data.events);
      }
      callback();
    },
    (error)=> {
      console.log( error );
    });
  }

  retrieveAllEventsByCategoryId( id )
  {
    this.MyEventService.getAllEventsByCategoryId( id ).subscribe(
      (data)=> {
      if(data.success){
        this.populateEvents(data.events);
      }
    },
    (error)=> {
      console.log( error );
    });
  }
}