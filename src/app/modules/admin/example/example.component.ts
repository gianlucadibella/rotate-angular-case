import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Initiative {
    title: string;
    date: string;
    price: string;
    info?: string;
}

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ExampleComponent
{
    title = 'To-Do';
    taskName  = String;
    todoList = String;
    arr = [];
    /**
     * Constructor
     */
    constructor()
    {
        
    }

    public initiatives: Initiative[] = [
        { title: 'Sell 5 additional tonnes with DHL on AMSHKG at $0.85 per kg ', date: new Date().toString() ,  price: '$220,000', info:"Increase 12% share to average EY market share (15%)"},
        { title: 'Sell 10 additional tonnes with DHL on AMSHKG at $0.95 per kg', date: new Date().toString() ,  price: '$300,000' , info: "Sell at 10% discount to peer yields"},
        { title: 'Sell 12 additional tonnes with DHL on AMSHKG at $3 per kg ', date: new Date().toString() ,  price: '$1,220,000', info:"Target EY 123 on D3 and EY125 on D4"},
    ];
    
    onSubmit(f : NgForm ){
        this.arr = f.value;
      
        var todo = this.arr["taskName"];
    
      
          this.initiatives.push({ title: todo, date: new Date().toString() ,  price: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg' }) ;
       
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.initiatives, event.previousIndex, event.currentIndex);
    }

}