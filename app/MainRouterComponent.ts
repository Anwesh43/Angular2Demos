import {Component} from '@angular/core'
class Fruit {
    constructor(public name:string,public price:number) {

    }
}
class Veg {
    constructor(public name:string,public price:number) {

    }
}
@Component({
   selector:'fruit-part',
   template:'<div><p *ngFor="let fruit of fruits">{{fruit.name}} for Rs.{{fruit.price}}</p></div>'
})
export class FruitComponent {
    fruits = [new Fruit("Apple",100),new Fruit("Banana",30),new Fruit("Orange",50),new Fruit("Grapes",100)]
}

@Component({
    selector:'veg-part',
    template:'<div><p *ngFor="let veg of vegs">{{veg.name}} for Rs.{{veg.price}}</p></div>'
})
export class VegComponent {
    vegs = [new Veg("Potato",24),new Veg("Onion",20),new Veg("Brinjal",20),new Veg("Tomato",40)]
}

@Component({
    selector:'not-found',
    template:'<h1>Not Found</h1>'
})
export class NotFoundComponent {

}

@Component({
    selector:'router-part',
    template:'<h1>Router Demo</h1><nav><a routerLink="/fruits" routerLinkActivate="active">Fruits</a><a routerLink="/veggies" routerLinkActivate="active">veggies</a></nav><router-outlet></router-outlet>'
})
export default class MainRouterComponent {

}
