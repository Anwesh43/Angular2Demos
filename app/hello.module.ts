import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HelloComponent} from './hello.component'
import {StudentComponent} from './student.component'
import {Boxify} from './Boxify'
@NgModule({
    imports:[BrowserModule],
    declarations:[HelloComponent,StudentComponent,Boxify],
    bootstrap:[HelloComponent]
})
export class HelloModule {

}
