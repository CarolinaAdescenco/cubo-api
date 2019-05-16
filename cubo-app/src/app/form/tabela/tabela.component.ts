import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form.service'

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styles: []
})
export class TabelaComponent implements OnInit {

  constructor(private services: FormService) { }


  ngOnInit() {
    this.services.atualizarLista();
  }

}
