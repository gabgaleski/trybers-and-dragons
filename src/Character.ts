import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const dex = getRandomInt(1, 10);

export default class Character implements Fighter {
  private _race: Race;
  private archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  name: string;

  constructor(
    personName: string,
    race: Race = new Elf(Character.name, dex),
    archetype: Archetype = new Mage(Character.name),
  ) {
    this.name = personName;
    this._race = race;
    this.archetype = archetype;
    this._maxLifePoints = race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy.amount = getRandomInt(1, 10);
  }
}