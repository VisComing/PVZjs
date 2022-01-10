// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class BgMap extends cc.Component {
  static mapArray: Array<Array<boolean>> = new Array(5);

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    for (let i = 0; i < BgMap.mapArray.length; i++) {
      BgMap.mapArray[i] = new Array(9);
    }
    for (let i = 0; i < 5; i++)
      for (let j = 0; j < 9; j++) BgMap.mapArray[i][j] = false;
  }

  // update (dt) {}

  static canPlacePlant(pos: cc.Vec2): boolean {
    let x = pos.x;
    let y = pos.y;
    const arr = BgMap.mapArray;

    if (x < 1000 && x > 236 && y < 510 && y > 30) {
      if (x > 236 && x < 333) x = 289;
      else if (x < 405) x = 372;
      else if (x < 493) x = 456;
      else if (x < 574) x = 535;
      else if (x < 652) x = 619;
      else if (x < 734) x = 695;
      else if (x < 815) x = 774;
      else if (x < 896) x = 857;
      else if (x < 1000) x = 945;
      if (y > 30 && y < 129) y = 80;
      else if (y < 219) y = 175;
      else if (y < 320) y = 274;
      else if (y < 419) y = 375;
      else if (y < 510) y = 475;
      if (arr[Math.floor(y / 100)][Math.floor((x - 200) / 90)] == false)
        return true;
      else return false;
    }
    return false;
  }
  //pos：世界坐标
  //返回世界坐标
  static getPlantRightPlace(pos: cc.Vec2): cc.Vec2 {
    let x = pos.x;
    let y = pos.y;
    const arr = BgMap.mapArray;

    if (x < 1000 && x > 236 && y < 510 && y > 30) {
      if (x > 236 && x < 333) x = 289;
      else if (x < 405) x = 372;
      else if (x < 493) x = 456;
      else if (x < 574) x = 535;
      else if (x < 652) x = 619;
      else if (x < 734) x = 695;
      else if (x < 815) x = 774;
      else if (x < 896) x = 857;
      else if (x < 1000) x = 945;
      if (y > 30 && y < 129) y = 80;
      else if (y < 219) y = 175;
      else if (y < 320) y = 274;
      else if (y < 419) y = 375;
      else if (y < 510) y = 475;
      if (arr[Math.floor(y / 100)][Math.floor((x - 200) / 90)] == false)
        return cc.v2(x, y);
      else return cc.v2(0, 0);
    }
    return cc.v2(0, 0);
  }
  static canPlaceZombie(pos: cc.Vec2): boolean {
    return false;
  }

  static setMapPlaceRowAndColumn(
    row: number,
    column: number,
    placed: boolean
  ): void {
    let arr = BgMap.mapArray;
    arr[row][column] = placed;
  }

  static setMapPlace(pos: cc.Vec2, placed: boolean): void {
    let x = pos.x;
    let y = pos.y;
    let arr = BgMap.mapArray;
    if (x < 1000 && x > 236 && y < 510 && y > 30) {
      if (x > 236 && x < 333) x = 289;
      else if (x < 405) x = 372;
      else if (x < 493) x = 456;
      else if (x < 574) x = 535;
      else if (x < 652) x = 619;
      else if (x < 734) x = 695;
      else if (x < 815) x = 774;
      else if (x < 896) x = 857;
      else if (x < 1000) x = 945;
      if (y > 30 && y < 129) y = 80;
      else if (y < 219) y = 175;
      else if (y < 320) y = 274;
      else if (y < 419) y = 375;
      else if (y < 510) y = 475;
      arr[Math.floor(y / 100)][Math.floor((x - 200) / 90)] = placed;
    }
  }
  static getRow(location: cc.Vec2): number {
    let row: number = -1;
    const y = location.y;
    if (y > 30 && y < 129) row = 0;
    else if (y < 219) row = 1;
    else if (y < 320) row = 2;
    else if (y < 419) row = 3;
    else if (y < 510) row = 4;
    return row;
  }
  static getColumn(location: cc.Vec2): number {
    let column: number = -1;
    const x = location.x;
    if (x > 236 && x < 333) column = 0;
    else if (x < 405) column = 1;
    else if (x < 493) column = 2;
    else if (x < 574) column = 3;
    else if (x < 652) column = 4;
    else if (x < 734) column = 5;
    else if (x < 815) column = 6;
    else if (x < 896) column = 7;
    else if (x < 1000) column = 8;
    return column;
  }
}
