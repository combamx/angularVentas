import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public lst: any[];
  public columnas: string[];

  constructor(
    private apiCliente: ApiclienteService
  ) {
    this.lst = Array();
    this.columnas = ['id', 'nombre'];
  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.apiCliente.getClientes().subscribe(response => {
      console.log(response.exito);

      this.lst = response.data;
    });
  }

  OpenAdd() {
    console.log("response.exito");
  }

}
