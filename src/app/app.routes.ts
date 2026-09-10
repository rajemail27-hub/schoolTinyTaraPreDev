import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Tiny Tara Preschool | Learn, Play & Shine',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'parents',
    title: 'For Parents | Tiny Tara Preschool',
    loadComponent: () =>
      import('./pages/parents/parents')
        .then(m => m.Parents)
  },
  {
    path: 'about',
    title: 'About Tiny Tara Preschool',
    loadComponent: () =>
      import('./pages/about/about')
        .then(m => m.About)
  },
  {
    path: 'contact',
    title: 'Contact Tiny Tara Preschool',
    loadComponent: () =>
      import('./pages/contact/contact')
        .then(m => m.Contact)
  },
  {
    path: 'kids-gallery-activity',
    title: 'Kids Activities Gallery | Tiny Tara Preschool',
    loadComponent: () =>
      import('./pages/kids-gallery-activity/kids-gallery-activity')
        .then(m => m.KidsGalleryActivity)
  },
  {
    path: '**',
    redirectTo: ''
  }
];