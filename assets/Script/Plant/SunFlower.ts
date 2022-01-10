// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

import PlantBase from "./PlantBase";
@ccclass
export default class SunFlower extends PlantBase {
  @property(cc.Prefab)
  sunPrefab1: cc.Prefab = null;
  @property(cc.Integer)
  hp = 1000;
  @property(cc.String)
  plantName = "SunFlower";
  @property(cc.Integer)
  money = 50;
  @property(cc.Integer)
  interval = 10;

  // LIFE-CYCLE CALLBACKS:

  start() {
    this.schedule(this.onTimer, this.interval);
  }

  onTimer() {
    let sun = cc.instantiate(this.sunPrefab1);
    if (sun == null) {
      cc.error("sun is null!\n");
      return;
    }
    sun.parent = this.node.parent;
    sun.setPosition(this.node.getPosition());
    cc.tween(sun)
      .to(sun.getComponent("Sun").sunDestroyTime, {}) //超过一定时间还没有被点击，那就销毁
      .call(() => {
        sun.destroy();
      })
      .tag(1)
      .start();
  }
  // update (dt) {}
}
