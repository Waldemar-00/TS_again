"use strict";
class VihicleRun {
    constructor(run, miles = 0) {
        this.run = run;
        this.miles = miles;
        this.run = run;
        this.miles = miles;
    }
}
function kmToMiles(vihicle) {
    vihicle.miles = Math.round(vihicle.run / 0.6);
    return vihicle;
}
const vihicleRun = new VihicleRun(100);
console.log(kmToMiles(vihicleRun));
