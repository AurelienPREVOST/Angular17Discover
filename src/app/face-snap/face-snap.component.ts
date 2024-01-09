import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule pour utiliser *ngIf. Pourtant deja dans app.component.ts *??*
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],  // Inclure CommonModule pour utiliser les *ngIf dans le html
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{ //"!" on each properties to avoid TS alert
  @Input() faceSnap!: FaceSnap;
  // Input est un décorateur qui permet l'appel de la classe (import from angular)
  // Rend possible l'injection de FaceSnap en l'important dans ce fichier et en l'initialisant comme ici avec @Input
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {}

  ngOnInit(): void { //maybe ": void" should be delete
      this.buttonText = "Oh Snap!"
  }

  onSnap() {
    if(this.buttonText === "Oh Snap!") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, unSnap!"
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh Snap!"
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`face/${this.faceSnap.id}`)
  }
}
