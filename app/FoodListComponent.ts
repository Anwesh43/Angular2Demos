import {Component} from '@angular/core'
import Food from './Food'
@Component({
    selector:'food-list',
    template:'<div *ngFor="let food of foods"><food-part [foodobj]="food"></food-part></div>',
})
export class FoodListComponent {
    foods = [new Food("Rice",10),new Food("Dal",20),new Food("Chicken",60),new Food("Paneer",50)]
}
