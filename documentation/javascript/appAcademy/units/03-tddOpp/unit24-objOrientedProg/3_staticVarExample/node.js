class SlowLoris {
    constructor(cuteness){
        this.cuteness = cuteness;
        if(!SlowLoris.cutest || SlowLoris.cutest.cuteness < this.cuteness ){
            SlowLoris.cutest = this
        }
    }

    static cutest = null;
}

console.log(SlowLoris.cutest)

const slowLoris1 = new SlowLoris(10)
const slowLoris2 = new SlowLoris(5)

console.log(SlowLoris.cutest)