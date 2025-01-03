import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    { question: 'O que é uma planta ornamental?', answer: 'Plantas ornamentais são aquelas cultivadas principalmente por sua aparência, como flores, folhagens ou formas interessantes.', show: false },
    { question: 'Como devo cuidar das minhas plantas?', answer: 'As plantas ornamentais geralmente requerem cuidados com a luz, a água, a temperatura e a umidade. Certifique-se de entender as necessidades específicas de cada planta.', show: false },
    { question: 'Posso manter plantas em ambientes internos?', answer: 'Sim, muitas plantas ornamentais se adaptam bem a ambientes internos, desde que recebam a quantidade adequada de luz e cuidados.', show: false },
    { question: 'Por que escolher a Mandacaru?', answer: 'A Mandacaru é apaixonada pelo cuidado das plantas. Nosso time de especialistas garante que cada planta seja tratada com amor e atenção, oferecendo o melhor para sua casa ou escritório.', show: false }
  ];

  showAnswer(index: number): void {
    this.faqs[index].show = !this.faqs[index].show;
  }
}
