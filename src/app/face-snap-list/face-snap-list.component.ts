import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {} // On préfère généralement  private  pour les injections de service, car ça empêche le template du component d'y accéder directement. Donner au template accès aux injections serait un anti-pattern Angular – autrement dit, une approche plus que déconseillée, souvent pour des raisons qui ne sont pas flagrantes au premier abord.
  // Permet d'injecter le service

  ngOnInit() { 
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps() // Les facesnaps sont desormais dans le service et on appel la methode pour les recuperer.
  };
}
