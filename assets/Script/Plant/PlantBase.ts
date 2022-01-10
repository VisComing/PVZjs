// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlantBase extends cc.Component {
  constructor() {
    super();
    window["G"].plantArray.push(this);
  }
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    window["G"];
  }
  //   start() {}
  // update (dt) {}
  row: number = 0;
  column: number = 0;
  hp: number = 0;
  protected setRow(row: number): void {
    this.row = row;
  }
  protected setColomn(column: number): void {
    this.column = column;
  }
  public getRow(): number {
    return this.row;
  }
  public getColumn(): number {
    return this.column;
  }
  protected setHp(hp: number) {
    this.hp = hp;
  }
  public getHp(): number {
    return this.hp;
  }
}
