import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CardGridComponent } from "./card-grid/card-grid.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AutocompleteComponent, CardGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoSISPLAN';
}
