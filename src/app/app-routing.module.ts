import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionComponent } from './pages/construction/construction.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: ConstructionComponent,
  },
  // {
  //   path: '/',
  //   redirectTo: '/construction',
  // },
  // {
  //   path: '**',
  //   redirectTo: '/construction',
  // },
  {
    path: 'construction',
    component: ConstructionComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
