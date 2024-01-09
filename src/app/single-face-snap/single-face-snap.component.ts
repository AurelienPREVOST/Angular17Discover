import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule pour utiliser *ngIf. Pourtant deja dans app.component.ts *??*
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule,
            RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void { 
      this.buttonText = "Oh Snap!"
      const faceSnapId = +this.route.snapshot.params['id']; //le + avant le this equivaut en JS vanilla a un parseInt()
      this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId); //permet de se dirigé vers l'id en question
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
}
