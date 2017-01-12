import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FoodComponent} from './FoodComponent'
import {FoodListComponent} from './FoodListComponent'
import {Cardify} from './Cardify'
@NgModule({
    imports:[BrowserModule],
    declarations:[FoodComponent,FoodListComponent,Cardify],
    bootstrap:[FoodListComponent]
})
export class FoodModule {

}
