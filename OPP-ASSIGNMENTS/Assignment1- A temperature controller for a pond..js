// Write a program in Javascript.

// Goal: A temperature controller for a pond.

// Advice: Donot search internet for a solution & waste your time. Think & derive on your own.

// Problem statement:
// 1. You have a beautiful pond with rain water.
// 2. This is owned by your village.
// 3. The villagers decided to grow fish in the pond.
// 4. Due to little harsh weather, the fish' growth is not satisfactory.
// 5. So, the villagers selected you to derive a solution to auto-control the water temperature of the pond to get better yield.
// 6. Now it is your responsibility to set a right temperature & maintain for three months.
// 7. Below is the brief on how your code should work
//     - Initial temperature is 30 C 
//     - The temperature of the pond is increased by 0.02 C for each 5 minutes.
//     - When the temperature reaches 40 C, then it should be gradually reduced by 0.01 C.
//     - When the temperature reaches 30 C, then it should be gradually increased by 0.02 C for each 5 minutes.
//     - during night time, the above behaviour is reduced by 50%



// Hints:
// - no UI is required
// - write pseudocode first
// - figure out the input(s) & output(s)
// - use appropriate validations
// - use classes 
// - discuss as team & derive your own solution
// - Once completed the implementation, share your github/gitlab link



class TemperatureMaintainance {
    temp = 0;
    time = 0;


    constructor(temp = 30, time = 5) {
        this.temp = temp;
        this.time = time;
    }

    oneDaytempInc(randomTemp) {
        return (1440 / this.time)* 24 * randomTemp;
    }

    oneDaytempDec(randomTemp) {
        return (1440 / this.time) * 24 * randomTemp ;
    }

}


class threeMonTemp extends TemperatureMaintainance {


    threeMontempInc(randomTemp) {
        return super.oneDaytempInc(randomTemp)*90;
    }

    threeMontempDec(randomTemp) {
        return super.oneDaytempDec(randomTemp)*90;
    }
}

const threemontemp= new threeMonTemp();
console.log(threemontemp.oneDaytempInc(0.02));
console.log(threemontemp.oneDaytempDec(0.01));
console.log(threemontemp.threeMontempInc(0.02));
console.log(threemontemp.threeMontempDec(0.01));


