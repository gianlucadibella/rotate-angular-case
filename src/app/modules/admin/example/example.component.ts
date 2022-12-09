import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Injectable, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface Initiative {
    title: string;
    date: string;
    price: string;
    info?: string;
    accepted?: boolean;
}

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})


@Injectable({
    providedIn: 'root'
})
export class ExampleComponent
{
    // title = 'To-Do';
    // taskName  = String;
    // todoList = String;
    // arr = [];
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
    )
    {
        
    }

    public accepetedInitiative : Boolean = false;

    public initiatives: Initiative[] = [
        { title: 'Sell 5 additional tonnes with DHL on AMSHKG at $0.85 per kg ', date: new Date().toString() ,  price: '$220,000', info:"Increase 12% share to average EY market share (15%)"},
        { title: 'Sell 10 additional tonnes with DHL on AMSHKG at $0.95 per kg', date: new Date().toString() ,  price: '$300,000' , info: "Sell at 10% discount to peer yields"},
        { title: 'Sell 12 additional tonnes with DHL on AMSHKG at $3 per kg ', date: new Date().toString() ,  price: '$1,220,000', info:"Target EY 123 on D3 and EY125 on D4"},
    ];

    public onAccept(item){
        let updatedInitiative = {
            ...item,
            accepted: true
        }
        this.initiatives[this.initiatives.indexOf(item)] = updatedInitiative;
        this.accepetedInitiative = true;
    }

    public onDimiss(item){
        let updatedInitiative = {
            ...item,
            accepted: false
        }
        this.initiatives[this.initiatives.indexOf(item)] = updatedInitiative;
        
        let notDimiss = this.initiatives.map(item => {
            if(item.accepted == true){
                return true
            }else{
                this.accepetedInitiative = false;
            }
        })

        this.accepetedInitiative = notDimiss.includes(true);
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.initiatives, event.previousIndex, event.currentIndex);
    }

}