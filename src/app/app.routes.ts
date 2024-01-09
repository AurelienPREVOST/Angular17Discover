import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'face', component: FaceSnapListComponent},
    {path: 'face/:id', component: SingleFaceSnapComponent},
    {path: '**', component: PageNotFoundComponent}, // Doit etre mis tout en bas
];
