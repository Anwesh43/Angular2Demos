import {Injectable} from '@angular/core'
import {getMockQuotes} from './MockQuotes'
@Injectable()
export default class QuoteService {
   getQuotes() {
      return getMockQuotes()
   }
}
