export interface Global {
  plantArray: cc.Node[];
  zombieArray: cc.Node[];
}

let a: Global = {
  plantArray: [],
  zombieArray: [],
};

window["G"] = a;
