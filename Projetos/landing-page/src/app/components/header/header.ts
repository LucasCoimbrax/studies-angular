// Otimiza o carregmento das imagens dentro do componente (NgOptimizedImage)
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}