import { Component,Input } from "@angular/core";
import { IEvent } from "./shared";

@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink] ="['/events', event?.id ]" class="well hoverwell thumbnail"> 
        <h2>{{event?.name |uppercase  }} </h2>
        <div>Date: {{event?.date |  date :'shortDate'}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time" > 
            Time: {{event?.time}}   
            <!-- <span>&nbsp;</span> -->
            <span *ngSwitchCase="'8:00 am'">  (Early start) </span>
            <span *ngSwitchCase="'10:00 am'">  (Late start) </span>
            <span *ngSwitchDefault >  (Normal start) </span>
        </div>
        
        <div> Price: {{event?.price | currency :'USD'}}</div>
        <div *ngIf="event?.location">
            <span>location : {{event?.location?.address}}</span>
          
            <span class="pad-left" > {{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <!-- <button class=" btn btn-primary"  > Click Me! </button> -->
        <div *ngIf="event?.onlineUrl">
            Online URL:{{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles:[`
    .thumbnail {min-height :210px; }
    .pad-left  {margin-left : 10px; }
    .well div { color: #bbb;}
    `]
})
 
export class EventThumbnailComponent{
    @Input() event:IEvent | undefined

    getStartTimeStyle():any {
        // const isEarlyStart= this.event && this.event.time === '8:00 am'
        // return { green:isEarlyStart, bold:isEarlyStart} 
        if (this.event && this.event.time === '8:00 am')
          return {color:'#003300', 'font-weight':'bold'}
        return {}

    }
}