import {ConnectService} from '../services/connect.service';
import { Component, Input } from '@angular/core';
import { Users } from '../models/Users';
import { MyEvents } from '../models/MyEvents';
import { Binds } from '../models/Binds';
import { MyEventService } from '../services/myevent.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css'],
  providers: [ MyEventService ] // Déclare le service qui sera utilisé
})
export class MyeventComponent {

  @Input() public myevent: MyEvents;
  public user: Users;

  constructor(private myEventService: MyEventService, private LoginService: ConnectService, private activatedRoute: ActivatedRoute ) {
    this.user = this.LoginService.getUser();
  }

  subscribe(id_user, id_event) :void
  {
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
