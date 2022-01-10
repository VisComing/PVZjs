// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Sun extends cc.Component {
  @property(cc.Integer)
  sunWorth: number = 25;
  @property(cc.Integer)
  sunDestroyTime: number = 8;

  sprite: cc.Sprite = null;
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}
  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    this.sprite = this.getComponent(cc.Sprite);
    if (this.sprite == null) {
      cc.error("get sun sprite failed!\n");
    }
  }

  onTouch(e: cc.Event.EventTouch) {
    //事件停止向父结点传递
    e.stopPropagation();
    this.node.stopActionByTag(1);
    cc.tween(this.node)
      .to(0.4, { position: cc.v3(-450, 210) })
      .call(this.destoryNode, this) //这里不要忘记写this
      .start();
  }

  destoryNode() {
    //Global.getSunCoinNumsTS().sunCoinNumsPlus(this.sunWorth);
    cc.log(this.sunWorth);
    this.node.destroy();
  }

  // onLoad () {}

  // update (dt) {}
}
