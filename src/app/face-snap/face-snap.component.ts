import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{ //"!" on each properties to avoid TS alert
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit(): void { //maybe ": void" should be delete
      this.title = 'Learning a New Frame Work';
      this.description = 'Quand tu commence à 0% sur OCR et vois "10heures pour les bases"';
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = "https://media.istockphoto.com/id/917512108/fr/photo/homme-daffaires-et-labyrinthe.jpg?s=1024x1024&w=is&k=20&c=rALN9DLXc53QA8lxAqY-GP36jeE_XY-vohPzvONN4YY="
      this.buttonText = "Oh Snap!"
  }

  onSnap() {
    if(this.buttonText === "Oh Snap!") {
      this.snaps++;
      this.buttonText = "Oops, unSnap!"
    } else {
      this.snaps--;
      this.buttonText = "Oh Snap!"
    }
  }
}
