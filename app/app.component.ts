import { Component } from '@angular/core';



@Component({
  selector: 'my-app', //<app-pack>
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  // [ ] means property binding - C to D
  // ( ) meants event binding - D to C
  
  title = 'LD App';
}
