import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private enviaFormularioService = inject(EnviaFormulario);

  name = "Lucas";
  meuBoolean = false;
  idButton = 123123;
  ariaLabel = "QWETR";
  isShowTitle = true;
  listItems = ["item 1", "item 2", "item 3"];

  @Input() minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  setNewBoolean(value: boolean){
    this.meuBoolean = value
  }
  
  // Utilizo assim caso não seja necessário utilizar dentro de um service 
  onSubmit(event: any){
    console.log(event)
  }

  submit(){
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviarInformacaoParaBackend()
  }

}
