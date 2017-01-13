import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {HelloModule} from './hello.module'
import {FoodModule} from './food.module'
import {MainRouterModule} from './MainRouterModule'
import QuotesModule from './quote.module'
platformBrowserDynamic().bootstrapModule(QuotesModule);
