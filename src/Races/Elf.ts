import Race from './Race';

class Elf extends Race {
  private _maxLife: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 99;
    Elf._instances += 1;
  }

  get maxLifePoints(): number { return this._maxLife; }
  public static createdRacesInstances(): number { return this._instances; }
}

export default Elf;