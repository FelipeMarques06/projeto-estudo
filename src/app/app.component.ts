import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = "Felipe Marques";
  idade = 34;
  linkImagem = "https://images.hdqwalls.com/download/mac-osx-sierra-lu-1366x768.jpg"

  larguraImagem = 30;
  alturaImagem = 30;

  calculaAnoNascimento(){
    const today = new Date();
    return today.getFullYear() - this.idade;
  }
  aumentar(){
    this.larguraImagem += 20;
    this.alturaImagem += 15;
  }

  diminuir(){
    this.larguraImagem -= 20;
    this.alturaImagem -= 15;
  }
}
