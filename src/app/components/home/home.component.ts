import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { BenefitComponent } from '../benefit/benefit.component';
import { FooterComponent } from '../footer/footer.component';
import { DomSanitizer } from '@angular/platform-browser';
import { FaqComponent } from '../../faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    NgOptimizedImage, 
    BtnPrimaryComponent, 
    NewsletterFormComponent, 
    BenefitComponent, 
    FooterComponent, 
    FaqComponent,  // Adicionar o FaqComponent aqui
    CommonModule   // Importando o CommonModule para uso do ngIf, ngFor, etc
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() videoPath!: string;
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoPath = "https://www.youtube.com/watch?v=";
  }
}
