import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import 'rxjs/Rx';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
