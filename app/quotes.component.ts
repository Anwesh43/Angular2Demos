import {Component,Input} from '@angular/core'
import QuoteService from './quotes.service'
import Quote from './Quote'
@Component({
    template:"<div><p>{{quote.message}}-'{{quote.by}}' </p></div>",
    selector:'quote-part'
})
export class QuoteComp {
    @Input("quoteobj") quote:Quote
}
@Component({template:'<div *ngFor="let quote of quotes"><quote-part [quoteobj]="quote"></quote-part></div>',selector:'quotes-part'})
export class QuotesComp{
    quotes:Quote[] = []
    constructor(quoteService:QuoteService) {
        this.quotes = quoteService.getQuotes()
        console.log(this.quotes)
    }
}
