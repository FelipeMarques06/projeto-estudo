import { Component, OnInit } from '@angular/core';

import { Paciente } from "./modelos/paciente";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[] = [
    {
      nome: 'Felipe Marques',
      dataNascimento: new Date(1999, 5, 26),
      cpf: '999.999.999-99',
      email: 'felipe@gmail.com',
    },
    {
      nome: 'Felipe Marques',
      dataNascimento: new Date(1999, 5, 26),
      cpf: '999.999.999-99',
      email: 'felipe@gmail.com',
    },
  ];

  thead = ['#','Nome','Nascimento','CPF',"Email", 'Ações'];

  nome: string = '';
  dataNascimento?: Date;
  cpf: string = '';
  email: string = '';

  criar() {
    this.pacientes.push({
      nome: this.nome,
      dataNascimento: this.dataNascimento!,
      cpf: this.cpf,
      email: this.email,
    });
  }

  deletar(index: number) {
    this.pacientes.splice(index, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
