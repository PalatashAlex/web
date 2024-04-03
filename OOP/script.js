class Engine {
    constructor(name, power, rotate){
        this.name=name;
        this.power=power;
        this.rotate=rotate;
    }
}
let d1= new Engine('D49', 3060, '900')
class Locomotive {
    constructor(name, speed, engine){
        this.name=name;
        this.speed=speed;
        this.engine=engine;
    }
}
let l1= new Locomotive('2TE116', 110, 'D49')