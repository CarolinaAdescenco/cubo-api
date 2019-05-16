import { Component, OnInit } from '@angular/core';
import { FormService } from "src/app/shared/form.service";
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styles: []
})
export class GraficoComponent implements OnInit {

  constructor(private lista: FormService) { }

  // teste = this.lista.funcionarios.map(({ nome }) => nome);

  // Doughnut
  // public doughnutChartLabels = this.lista.funcionarios.map(({ nome }) => nome);
  // public demodoughnutChartData = this.lista.funcionarios.map(({ participacao }) => participacao);
  // public doughnutChartType: string = 'doughnut';


  ngOnInit() {
  }

}
