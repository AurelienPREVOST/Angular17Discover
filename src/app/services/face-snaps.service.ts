import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root' // Permet de partager à toute l'appli
})

export class FaceSnapsService {
    // Un service n'a pas de ngOnInit
    faceSnaps: FaceSnap[] = [
        { 
          id: 1,
          title: 'Learning a New Frame Work',
          description: 'Quand tu commence à 0% sur OCR et vois "10heures pour les bases"',
          snaps: 0,
          imageUrl: "https://media.istockphoto.com/id/917512108/fr/photo/homme-daffaires-et-labyrinthe.jpg?s=1024x1024&w=is&k=20&c=rALN9DLXc53QA8lxAqY-GP36jeE_XY-vohPzvONN4YY=",
          createdDate: new Date(),
          location: "Paris",
        },
        {
          id: 2,
          title: 'Vacance!',
          description: 'Vacance au lac vue sur la montagne"',
          snaps: 0,
          imageUrl: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          createdDate: new Date(),
          location: "Montagne"
        },
        {
          id: 3,
          title: 'Parrot',
          description: 'Hello"',
          snaps: 0,
          imageUrl: "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          createdDate: new Date(),
        },
      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error("facesnap not found")
        } else {
            return faceSnap
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: "snap" | "unsnap"): void { // void pas d'expression return juste une action
        console.log("hello")
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--
      }
    }