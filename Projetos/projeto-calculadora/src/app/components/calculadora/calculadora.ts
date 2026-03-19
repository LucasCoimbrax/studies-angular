import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  value_1: number = 0;
  isSetValue_1: boolean = false;
  value_2: number = 0;
  isSetValue_2: boolean = false;
  operation: string = "";
  result: number = 0;

  setVariable(newValue: number){
    if(!this.isSetValue_1){
      this.value_1 = newValue;
      this.isSetValue_1 = true

      console.log("Valor 1: " + this.value_1)

    } else if(!this.isSetValue_2){
      this.value_2 = newValue
      this.isSetValue_2 = true

      console.log("Valor 2: " + this.value_2)
    }
  }

  resetValues(){
    this.value_1 = 0;
    this.isSetValue_1 = false;
    this.value_2 = 0;
    this.isSetValue_2 = false;
    this.operation = "";
    this.result = 0;
  }

  setOperation(setOperation: string){
    this.operation = setOperation
    console.log(this.operation)
  }

  calcularResult(){
    switch(this.operation){
      case "+": this.result = this.value_1 + this.value_2
      break
      case "-": this.result = this.value_1 - this.value_2
      break
      case "/": this.result = this.value_1 / this.value_2
      break
      case "*": this.result = this.value_1 * this.value_2
      break
    }
  }
}
