import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import {Tablero} from './tablero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

 

  contadorJugador : number = 1;

  boolplayer : boolean;

  victoriasj1 : number = 0;

  victoriasj2 : number = 0;

  tableroTriqui : Tablero = new Tablero()

  valorArray(n : number): void{

    if(this.contadorJugador % 2 == 0){

        if(this.tableroTriqui.posiciones[n] == 0){
            this.tableroTriqui.posiciones[n] = 2;
            this.player()
            this.boolplayer = false;
        }
      

    }else{

        if(this.tableroTriqui.posiciones[n] == 0){

            this.tableroTriqui.posiciones[n] = 1;
            this.player();
            this.boolplayer = true;
            
        }
    

    }


    if((this.tableroTriqui.posiciones[0] == 1 && 
      this.tableroTriqui.posiciones[1] == 1 &&
      this.tableroTriqui.posiciones[2] == 1) ||
      (this.tableroTriqui.posiciones[3] == 1 && 
        this.tableroTriqui.posiciones[4] == 1 &&
        this.tableroTriqui.posiciones[5] == 1) ||
        (this.tableroTriqui.posiciones[6] == 1 && 
          this.tableroTriqui.posiciones[7] == 1 &&
          this.tableroTriqui.posiciones[8] == 1) ||
        (this.tableroTriqui.posiciones[0] == 1 && 
          this.tableroTriqui.posiciones[3] == 1 &&
          this.tableroTriqui.posiciones[6] == 1)||
        (this.tableroTriqui.posiciones[1] == 1 && 
          this.tableroTriqui.posiciones[4] == 1 &&
          this.tableroTriqui.posiciones[7] == 1)||
          (this.tableroTriqui.posiciones[2] == 1 && 
            this.tableroTriqui.posiciones[5] == 1 &&
            this.tableroTriqui.posiciones[8] == 1)||
          (this.tableroTriqui.posiciones[0] == 1 && 
            this.tableroTriqui.posiciones[4] == 1 &&
            this.tableroTriqui.posiciones[8] == 1) ||
            (this.tableroTriqui.posiciones[2] == 1 && 
              this.tableroTriqui.posiciones[4] == 1 &&
              this.tableroTriqui.posiciones[6] == 1)
            
      ){

        this.winPlayer1();

      }else if((this.tableroTriqui.posiciones[0] == 2 && 
        this.tableroTriqui.posiciones[1] == 2 &&
        this.tableroTriqui.posiciones[2] == 2) ||
        (this.tableroTriqui.posiciones[3] == 2 && 
          this.tableroTriqui.posiciones[4] == 2 &&
          this.tableroTriqui.posiciones[5] == 2) ||
          (this.tableroTriqui.posiciones[6] == 2 && 
            this.tableroTriqui.posiciones[7] == 2 &&
            this.tableroTriqui.posiciones[8] == 2) ||
          (this.tableroTriqui.posiciones[0] == 2 && 
            this.tableroTriqui.posiciones[3] == 2 &&
            this.tableroTriqui.posiciones[6] == 2)||
          (this.tableroTriqui.posiciones[1] == 2 && 
            this.tableroTriqui.posiciones[4] == 2 &&
            this.tableroTriqui.posiciones[7] == 2)||
            (this.tableroTriqui.posiciones[2] == 2 && 
              this.tableroTriqui.posiciones[5] == 2 &&
              this.tableroTriqui.posiciones[8] == 2)||
            (this.tableroTriqui.posiciones[0] == 2 && 
              this.tableroTriqui.posiciones[4] == 2 &&
              this.tableroTriqui.posiciones[8] == 2) ||
              (this.tableroTriqui.posiciones[2] == 2 && 
                this.tableroTriqui.posiciones[4] == 2 &&
                this.tableroTriqui.posiciones[6] == 2))
                {

                  this.winPlayer2();

      }
  
    console.log(this.tableroTriqui.posiciones)

  }

  player(): void{
    this.contadorJugador += 1;
  }

  winPlayer1(): void{
    alert("Gano el jugador 1");
    this.tableroTriqui = new Tablero();

    this.victoriasj1 += 1;

  }

  winPlayer2(): void{
    alert("Gano el jugador 2");
    this.tableroTriqui = new Tablero();

    this.victoriasj2 += 1;
  }


 

 
  
 
  
}

