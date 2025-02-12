import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-autocomplete',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent {

  myControl = new FormControl('');
  options: string[] = ['AAAaA', 'AAAaB', 'AAAaC', 'AAAaD', 'AAAaAA', 'AAAaAB', 'AAAaAC'];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string | null): string[] { // value pode ser string ou null
    const filterValue = value?.toLowerCase() ?? ''; // Trata null e undefined
    return this.options.filter(option => option.toLowerCase().includes(filterValue) && filterValue.length >= 3);
  }
}
