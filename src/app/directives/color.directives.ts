import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { MyEvents } from "../models/MyEvents";

@Directive({
    selector:'[colored]'
})

export class ColorDirective implements OnInit, OnChanges
{
    
  myevents: MyEvents[] = [];

  @Input() public myevent: MyEvents;
  @Input() public bind: Boolean;

  private element: HTMLElement;

  constructor( el: ElementRef )
  {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
    const datenow = new Date();
    if(this.bind) // Si user ne participe pas à l'event pas de couleur
    {
        if( datenow.getTime() < this.myevent.getDatedeb().getTime() )
        {   // date now < date début et user participe
            this.element.style.backgroundColor = "blue";
        }
        else if( datenow.getTime() > this.myevent.getDatedeb().getTime() && datenow.getTime() < this.myevent.getDatefin().getTime() )
        {
            // date now > date début  et date now < date fin et user participe
            this.element.style.backgroundColor = "green";
        }
        else if( datenow.getTime() > this.myevent.getDatefin().getTime() )
        {   // date now > date fin et user participe
            this.element.style.backgroundColor = "red";
        }
    }
    else
    {
        this.element.style.backgroundColor = "grey";
    }
}

ngOnChanges(changes: SimpleChanges): void {
    console.log("changed");
    const datenow = new Date();
    if(this.myevent.getBind()) // Si user ne participe pas à l'event pas de couleur
    {
        if( datenow.getTime() < this.myevent.getDatedeb().getTime() )
        {   // date now < date début et user participe
            this.element.style.backgroundColor = "blue";
        }
        else if( datenow.getTime() > this.myevent.getDatedeb().getTime() && datenow.getTime() < this.myevent.getDatefin().getTime() )
        {
            // date now > date début  et date now < date fin et user participe
            this.element.style.backgroundColor = "green";
        }
        else if( datenow.getTime() > this.myevent.getDatefin().getTime() )
        {   // date now > date fin et user participe
            this.element.style.backgroundColor = "red";
        }
    }
    else
    {
        this.element.style.backgroundColor = "grey";
    }
}

}
