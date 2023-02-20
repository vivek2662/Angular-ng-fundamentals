import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { IEvent } from "./shared";
import { EventService } from "./shared/event.service";

declare let toastr:any

@Component({  
    template  :`
    <div>
    <h3>upcoming Angular Events</h3>
    <hr/>
    <div class="row">
        <div *ngFor = " let event of events"  class="col-md-5">
            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event" > </event-thumbnail>
        </div>
    </div>
    </div>
`,

})


export class EventsListComponent implements OnInit{
  events:IEvent[] | undefined 

  constructor (private eventService:EventService, private toastr:ToastrService, private route:ActivatedRoute){
     
  }
  ngOnInit(){
   this.events=this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName: any){
    this.toastr.success(eventName)
  }
  
}