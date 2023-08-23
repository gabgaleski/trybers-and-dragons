import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;
  private _player: Fighter;

  constructor(player2: Fighter, player: Fighter) {
    super(player);
    this._player2 = player2;
    this._player = player;
  }

  public fight(): number {
    for (
      let index = 0; this._player.lifePoints > 0 
      && this._player2.lifePoints > 0; index += 1) {
      this._player.attack(this._player2);
      this._player2.attack(this._player);
    }
    return this._player.lifePoints === -1 ? 1 : -1;
  }
}