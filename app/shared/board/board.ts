import { Square } from './square';
import { ModelInterface } from '../model.interface';

export class Board implements ModelInterface {
  private _squares: Square[];

  get squares(): Square[] {
    return this._squares;
  }

  set squares(value: Square[]) {
    this._squares = value;
  }

  constructor(public title: string, public moves: number, public level: number, public nextScreen: string) {
    this._squares = [];
  }

  toString(): string {
    return '{ title: ' + this.title + ', moves: ' + this.moves + ', level: ' +
      this.level + ', nextScreen: ' + this.nextScreen + ' }';
  }

}
