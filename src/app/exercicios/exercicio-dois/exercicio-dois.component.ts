import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.scss']
})
export class ExercicioDoisComponent implements OnInit {

  idade:number = 2;

  aumentar(){
    this.idade++;
  }

  diminuir(){
      this.idade--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
