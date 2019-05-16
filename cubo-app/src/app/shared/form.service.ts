import { Injectable } from '@angular/core';
import { Funcionario } from "./funcionario";
import { HttpClient, HttpParameterCodec } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  readonly rootUrl = 'http://localhost:3000';
  funcionarios: Funcionario[];

  constructor(private http:HttpClient) { }

  atualizarLista(){
    this.http.get(this.rootUrl + '/funcionarios')
    .toPromise()
    .then(res => this.funcionarios = res as Funcionario[])
  }
}
