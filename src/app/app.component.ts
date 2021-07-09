import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Sude';
  items= [
    { description: "Bilgisayar", action: "No" },
    { description: "Spor", action: "No" },
    { description: "Piyano", action: "No" },
    { description: "Konser", action: "No" }
  ] 
}
