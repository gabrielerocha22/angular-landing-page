import { NgOptimizedImage } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-foote',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const footer = document.getElementById('footer');
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    // Quando o usuário chega no final da página, mostrar o rodapé
    if (scrollPosition >= scrollHeight) {
      footer!.style.bottom = "0";  // Exibe o rodapé
    } else {
      footer!.style.bottom = "-100%";  // Oculta o rodapé
    }
  }
}
