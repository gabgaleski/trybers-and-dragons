import Race from './Race';

class Dwarf extends Race {
  private _maxLife: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 80;
    Dwarf._instances += 1;
  }

  get maxLifePoints(): number { return this._maxLife; }
  public static createdRacesInstances(): number { return this._instances; }
}

export default Dwarf;