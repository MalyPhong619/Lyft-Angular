import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lyft Clone';

  drivers : Driver[] = [
    new Driver('Maly', 'Phong', 28, 'Female')
    new Driver('Andrea', 'Nicole', 27, 'Female')
    new Driver('Sunny', 'Lakang', 34, 'Male')
  ]
  
}
