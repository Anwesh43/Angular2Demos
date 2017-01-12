import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import MainRouterComponent,{FruitComponent,VegComponent,NotFoundComponent} from './MainRouterComponent'
import {RouterModule,Routes} from '@angular/router'

const appRoutes:Routes = [{path:'fruits',component:FruitComponent},{path:'veggies',component:VegComponent},{path:'',redirectTo:'/fruits',pathMatch:'full'},{path:'**',component:NotFoundComponent}]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes),BrowserModule],
    declarations:[FruitComponent,VegComponent,MainRouterComponent,NotFoundComponent],
    bootstrap:[MainRouterComponent]
})
export class MainRouterModule {

}
