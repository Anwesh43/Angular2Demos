import {QuoteComp,QuotesComp} from './quotes.component'
import QuoteService from './quotes.service'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
@NgModule({
  imports:[BrowserModule],
  declarations:[QuoteComp,QuotesComp],
  bootstrap:[QuotesComp],
  providers:[QuoteService]
})
export default class QuotesModule {

}
