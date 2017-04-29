import { ModelInterface } from '../model.interface';

export class StateModel implements ModelInterface {

  constructor(public id: number, public key: string, public value: string) {}

  toString(): string {
    return '{ id: ' + this.id + ', key: ' + this.key + ', value: ' + this.value + ' }';
  }

}
