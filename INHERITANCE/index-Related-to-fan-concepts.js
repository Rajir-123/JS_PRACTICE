// 1. Create a class called 'fan', assume your own data members, methods atleast 6 each and two private data members.

// 2. Create a child class 'tableFan' from above 'fan'

// 3. Create a child class 'ceilingFan' from 'fan'

// 4. Try to access private members from 'fan' in 'ceilingFan'. Is this allowed?--not allowed

class fan {
    noOfBlades = 0;
    motorSpeed = 0;
    motor = 0;
    canopy = 0
    #guard = 0;
    #speedControlKnob = 0;
    cost = 0;
    condensorCapacity = 0;
    speed = 0;
    count=0;


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
        this.cost = this.blades * this.motorSpeed * this.condensorCapacity;
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

    countOfItems(){
        this.count=this.blades+this.canopy+this.motor+this.downRod+this.#guard+this.#speedControlKnob;
        return `count is ${this.count}`;
    }


}



class tableFan extends fan {
    constructor(plug = 1) {
        super();
        this.plug = plug;
    }

    //Method overriding
    calculateNoofBlades(noOfTfblades) {
        this.noOfTfblades = noOfTfblades;
        return `Nmber of TF blades are ${this.noOfTfblades}`;
    }

}

class ceilingFan extends fan {
    constructor(downRod = 1) {
        super()
        this.downRod = downRod;
    }

    //Method overriding
    calculateNoofBlades(noOfCfblades) {
        this.noOfCfblades = noOfCfblades;
        return `Nmber of CF blades are ${this.noOfCfblades}`;
    }

    //     accessingGuard(){
    //        return this.#guard;//not accessible in outside of class fan because it is a private data member
    //     }
    //     accessingSpeedControlKnob(){
    //         return this.#speedControlKnob;//not accessible in outside of class fan because it is a private data member
    //      }
}

const tf = new tableFan();
let noOfTfBlades = tf.calculateNoofBlades(4);

const cf = new ceilingFan();
let costResult = cf.calculateCost();
let speedResult = cf.calculateSpeed();
let noOfCfBlades = cf.calculateNoofBlades(3);
let accessGuard=cf.accessingGuard();
let accessSpeedControlKnob=cf.accessingSpeedControlKnob()
let count=cf.countOfItems()
console.log(costResult);
console.log(speedResult);
console.log(noOfTfBlades);
console.log(noOfCfBlades);
console.log(accessGuard);
console.log(accessSpeedControlKnob);
console.log(count);

