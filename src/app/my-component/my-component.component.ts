import { Component, OnInit } from '@angular/core';
import { Configuracion } from './Configuracion';

@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
    public gameConfig: Configuracion = new Configuracion("", "", 0, 0);
    public newGameConfig: Configuracion = new Configuracion("", "", 0, 0);
    public remainingAttempts: number = 0;
    public attemptedNumbers: Array<number> = [];
    public currentAttempt: number = 0;
    public randomNumber: number = 0;
    public feedback: string = "";
    public isGameFinished: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    setSettings(): void {
        if (this.newGameConfig.isValid()) {
            let gameWrapper = document.getElementById("game-wrapper");

            // Init game configuration form new configuration object.
            this.gameConfig = new Configuracion(
                this.newGameConfig.name,
                this.newGameConfig.surname,
                this.newGameConfig.rangeTopLimit,
                this.newGameConfig.maxNumberOfAttempts
            );

            this.remainingAttempts = this.gameConfig.maxNumberOfAttempts;
            this.randomNumber = Math.floor(Math.random() * (this.newGameConfig.rangeTopLimit + 1));
            this.isGameFinished = false;
            this.feedback = "";

            if (gameWrapper) {
                gameWrapper.style.display = "flex";
            }
        }
    }

    attemptGuess(): void {
        if (!this.isGameFinished) {
            this.attemptedNumbers.push(this.currentAttempt);
            console.log(this.attemptedNumbers);

            if (this.currentAttempt == this.randomNumber) {
                // User guessed correctly, game finished.
                this.feedback = "SI";
                this.isGameFinished = true;
            } else {
                // Use guessed incorrectly, game continues.
                this.feedback = "NO";
                this.remainingAttempts--;

                if (this.remainingAttempts == 0) {
                    // No more attempts left, game finished.
                    this.isGameFinished = true;
                }
            }
        } else {
            alert("Se ha acabado el juego, refresca la página o crea una nueva configuración para volver a jugar.");
        }
    }
}
