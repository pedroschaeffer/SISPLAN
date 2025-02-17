import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


//  Estrutura de dados
interface DadosTab {
  container: string;
  tamanho: number;
  cliente: string;
  observacao: string;
}

// Fonte de dados para a tabela
const ELEMENT_DATA: DadosTab[] = [
  { container: 'CSNUCSNUCSNU12-8', tamanho: 40, cliente: 'CAOA MONTADORA DE VEICULOS LTDA', observacao: 'NDA' },
  { container: 'CSNUCSNUCSNU12-12', tamanho: 40, cliente: 'CAOA MONTADORA DE VEICULOS LTDA', observacao: 'NDA' },
];

@Component({
  selector: 'app-card-grid',
  imports: [FormsModule, CommonModule],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css'
})

export class CardGridComponent implements OnInit {
  headers: string[] = ['Container', 'Tamanho', 'Cliente', 'Observação'];
  data = ELEMENT_DATA;
  searchQuery: string = ''; // Armazena pesquisa

  ngOnInit(): void {
  }

  filterData() {
    this.data = ELEMENT_DATA.filter(item => {
      return item.container.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             item.tamanho.toString().includes(this.searchQuery) ||
             item.cliente.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             item.observacao.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
}