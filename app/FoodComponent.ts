import {Component,Input} from '@angular/core'
import Food from './Food'
@Component({
  selector:'food-part',
  template:'<div cardify><p>Item:{{f.name}}</p><p>Price:Rs.{{f.price}}</p></div>',
  styleUrls:['food.css']
})

export class FoodComponent {
    @Input("foodobj") f:Food
}
