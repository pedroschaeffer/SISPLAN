import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'


interface Convidado {
  nome: string;
  contato: string;
}

@Component({
  selector: 'app-preenchimento-dinamico',
  imports: [FormsModule, CommonModule],
  templateUrl: './preenchimento-dinamico.component.html',
  styleUrl: './preenchimento-dinamico.component.css'
})
export class PreenchimentoDinamicoComponent {

  convidados: Convidado[] = [];

  adicionarConvidado() {
    const novoConvidado: Convidado = { nome: '', contato: '' };
    this.convidados = [...this.convidados, novoConvidado]; // Cria um novo array
  }


  // Caso preciso do boão remover
  // removerConvidado(index: number) {
  //   this.convidados.splice(index, 1);
  // }
}