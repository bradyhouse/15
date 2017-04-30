import { ModelInterface } from '../model.interface';

export class Score implements ModelInterface {

  constructor(public id: number,
              public user: string,
              public time: string,
              public moves: number,
              public level: number,
              public cssClass: string,
              public row: number) {
  }

  toString(): string {
    return '{ row: ' + this.row +
      ', id: ' + this.id +
      ', user: ' + this.user +
      ', time: ' + this.time +
      ', moves: ' + this.moves +
      ', level: ' + this.level +
      ', cssClass: ' + this.cssClass + ' }';
  }

}
