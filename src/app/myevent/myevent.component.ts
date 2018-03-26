import { Component, OnInit, Input } from '@angular/core';
import { MyEvents } from '../models/MyEvents';
import { SaveUserId } from '../models/SaveUserId';
import {MyEventService} from '../services/myevent.service';
import { ActivatedRoute } from '@angular/router';
import { Binds } from '../models/Binds';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css'],
  providers: [ MyEventService ] // Déclare le service qui sera utilisé
})
export class MyeventComponent implements OnInit {

  ngOnInit(): void {
    this.id_user = this.saveuserid.getSaveUserId();
  }

  @Input() public myevent: MyEvents;
  public id_user: number;

  constructor(private myEventService: MyEventService, private activatedRoute: ActivatedRoute, private saveuserid: SaveUserId) { }

  subscribe(id_user, id_event) :void
  {
    console.log( this.id_user );
    const bind: Binds = new Binds(
      id_user,
      id_event
    );

    this.myEventService.addBind( bind ).subscribe((data) =>
    {
      if(data.success){
        bind.setId_user_bind( data.id_user_bind);
        bind.setId_event_bind( data.id_event_bind);
        this.myevent.setBind(true);
      }
    },
      (error) => {
        console.log( error );
    });
  }


  unsubscribe(id_user, id_event) :void
  {
    const bind: Binds = new Binds(
      id_user,
      id_event
    );
    this.myEventService.deleteBind( bind ).subscribe((data) =>
    {
      if(data.success){
        bind.setId_user_bind( data.id_user_bind);
        bind.setId_event_bind( data.id_event_bind);
        this.myevent.setBind(false);
      }
    },
      (error) => {
        console.log( error );
    });
  }
}
