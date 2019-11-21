import { Component, OnInit } from '@angular/core';

import { Players } from './../../model';

@Component({
  selector: 'app-play-board',
  templateUrl: './play-board.component.html',
  styleUrls: ['./play-board.component.css']
})
export class PlayBoardComponent implements OnInit {

  public cells: string[];
  public winner: string;
  public showPlayBoard: boolean = false;
  public players: Players = new Players();
  public playerName: string = '';

  private _xTurn: boolean;
  private _rows: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  constructor() { }

  ngOnInit() {
  }

  newGame() {
    this.cells = Array(9).fill(null);
    this.showPlayBoard = true;
    this.winner = null;
    this._xTurn = true;
    if (!this.players.playerX) this.players.playerX = 'X';
    if (!this.players.playerO) this.players.playerO = 'O';
    this.playerName = this.players.playerX;
  }

  onMove(index: number) {
    if (!this.cells[index]) {
      this.cells.splice(index, 1, this.player);
      this._xTurn = !this._xTurn;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    for (let i = 0; i < this._rows.length; i++) {
      const [a, b, c] = this._rows[i];

      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        return (this.cells[a] === 'X' ? this.players.playerX : this.players.playerO);
      }
    }
    return null;
  }

  get player() {
    this.playerName = this._xTurn ? this.players.playerO : this.players.playerX;
    return this._xTurn ? 'X' : 'O';
  }

}
