import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormulario {

  enviarInformacaoParaBackend(){
    console.log("Enviado para o backend")
  }
}
