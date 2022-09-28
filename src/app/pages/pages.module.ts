import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ConstructionComponent } from './construction/construction.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [TermsComponent, PrivacyComponent, ConstructionComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [TermsComponent, PrivacyComponent, ConstructionComponent],
})
export class PagesModule {}
