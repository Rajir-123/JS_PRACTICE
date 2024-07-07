// Static variables
// Static methods
// private variables (using a # before a variable)
// private methods (Supported in ES9 standard only) (using a # before a method)

class fan {
    noOfBlades = 0;
    motorSpeed = 0;
    motor = 0;
    canopy = 0
    #guard = 1;
    #speedControlKnob = 0;
    cost = 0;
    condensorCapacity = 0;
    speed = 0;
    count=0;
    static discount=50;
    static checkValue=60



    constructor(blades = 4, motorSpeed = 60, motor = 1, canopy = 1, guard = 1, speedControlKnob = 1, cost = 0, condensorCapacity = 8, speed = 0,count=0) {
        this.blades = blades;
        this.motorSpeed = motorSpeed;
        this.motor = motor;
        this.canopy = canopy;
        this.#guard = guard;
        this.#speedControlKnob = speedControlKnob;
        this.cost = cost;
        this.condensorCapacity = condensorCapacity;
        this.speed = speed;
        this.count=count;
    }

    calculateCost() {
        this.discount=60;//we can change the static value
        this.cost = (this.blades * this.motorSpeed * this.condensorCapacity)-this.discount;
        return `Cost of fan is ${this.cost}`;
    }

     calculateSpeed() {
        this.speed = this.motorSpeed * this.condensorCapacity;
        return `Speed of fan is ${this.speed}`;
    }

    calculateNoofBlades() {
        return `Nmber of blades are ${this.blades}`;
    }

    accessingGuard() {
        return this.#guard;//accessible
    }
    accessingSpeedControlKnob() {
        return this.#speedControlKnob;//accessible
    }

    //private method
    #countOfItems(){
        this.count=this.blades+this.canopy+this.motor+this.#guard+this.#speedControlKnob+this.plug;
        return `count is ${this.count}`;
    }


    includePlugInCount(){
        return `${this.#countOfItems()}`;//no error
    }

    static costOfMotor(){
        return 5*(this.checkValue);
    }

    static check(){
        return 'static method';
    }

}



class tableFan extends fan {
    constructor(blades = 4, motorSpeed = 60, motor = 1, canopy = 1, guard = 1, speedControlKnob = 1, cost = 0, condensorCapacity = 8, speed = 0,count=0,plug = 1) {
        super(blades = 4, motorSpeed = 60, motor = 1, canopy = 1, guard = 1, speedControlKnob = 1, cost = 0, condensorCapacity = 8, speed = 0,count=0);
        this.plug = plug;
    }

    // includePlugInCount(){
    //     return this.#countOfItems();//error-Private field '#countOfItems' must be declared in an enclosing class.
    // }


    //Method overriding
    calculateNoofBlades(noOfTfblades) {
        this.noOfTfblades = noOfTfblades;
        return `Nmber of TF blades are ${this.noOfTfblades}`;
    }

}

class ceilingFan extends fan {
    constructor(blades = 4, motorSpeed = 60, motor = 1, canopy = 1, guard = 1, speedControlKnob = 1, cost = 0, condensorCapacity = 8, speed = 0,count=0,downRod = 1) {
        super(blades = 4, motorSpeed = 60, motor = 1, canopy = 1, guard = 1, speedControlKnob = 1, cost = 0, condensorCapacity = 8, speed = 0,count=0)
        this.downRod = downRod;
    }

    //Method overriding
    calculateNoofBlades(noOfCfblades) {
        this.noOfCfblades = noOfCfblades;
        return `Nmber of CF blades are ${this.noOfCfblades}`;
    }

        // accessingGuard(){
        //    return this.#guard;//not accessible in outside of class fan because it is a private data member
        // }
        // accessingSpeedControlKnob(){
        //     return this.#speedControlKnob;//not accessible in outside of class fan because it is a private data member
        //  }
}


// accessing static data memeber and method uding class name

let motorspeed=fan.costOfMotor();
// let checkData=fan.check();
// let accessingDiscount=fan.discount;
console.log(motorspeed);
// console.log(checkData);
// console.log(accessingDiscount);


const tf = new tableFan();
let noOfTfBlades = tf.calculateNoofBlades(4);
let countWithPlug=tf.includePlugInCount()

const cf = new ceilingFan();
let costResult = cf.calculateCost();
let speedResult = cf.calculateSpeed();
let noOfCfBlades = cf.calculateNoofBlades(3);
let accessGuard=cf.accessingGuard();
let accessSpeedControlKnob=cf.accessingSpeedControlKnob()
// let count=cf.#countOfItems()//Private field '#countOfItems' must be declared in an enclosing class
console.log(costResult);
console.log(speedResult);
console.log(noOfTfBlades);
console.log(noOfCfBlades);
console.log(accessGuard);
console.log(accessSpeedControlKnob);
// console.log(count);
console.log(countWithPlug);




