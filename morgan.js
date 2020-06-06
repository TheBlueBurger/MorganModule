const morgan = {
    boredom: -69,
    minBored: 0,
    maxBored: 10,
    setBoredom: (boredom) => {
        this.boredom = boredom;
        return this.getBoredomLevel();
    },
    setMinMaxBoredom: (min, max) => {
        this.minBored = min || this.minBored;
        this.maxBored = max || this.maxBored;
        return {min:min, max:max};
    },
    getMaxBoredomLevel: () => {
        return maxBored;
    },
    getMinBoredomLevel: () => {
        return minBored;
    },
    getBoredomLevel: () => {
        let randBoredom = Math.floor(Math.random() * this.getMaxBoredomLevel() + 1);
        if(randBoredom != this.boredom && this.boredom != -69) { // if its not deafult it will set it i dont think anyone will set it to -69 cus its out of range anyway
            randBoredom = this.boredom;
        }
        if(randBoredom < this.getMinBoredomLevel || randBoredom > this.getMaxBoredomLevel) {
            throw new RangeError("this is too bored!!")
        } else {
            return randBoredom;
        }
    },
    isBored: () => {
        return this.getBoredomLevel() > this.getMinBoredomLevel();
    },
    brain: {
        think: (about, cb) => {
            if(about == null) {
                about = "ur mom";
            }
            if(cb == null) {
                cb = (res) => {console.log(res)};
            }
            cb("hmmmmmmmmmm me thinking so shut ;]");
            setTimeout(() => {cb(`ok im done thinking ${about} is very big (/shrug :dogdance-1:)`)}, 1000 * Math.floor(Math.random() * 15));
        },
        doSomething: () => {
            let quotes = ["ok i did something bye bye", "AAAAAAAAAAAAAAAAAA", "no u", "hm nu", "oh ok", "working on util...", "working on morgzhack...", "working on recyclebot..."];
            return quotes[Math.floor(Math.random() * quotes.length)];
        },

    }
    /*
    TODO:
    add this shit/better translations
    {"nu":"no", "mabe":"can be yes or no depends", "helo":"hello", "kk":"ok idc", "ah yes of course":"something is very obvious", "illegal":"its like yea im right and ur wrong", "legal":"no u", "aaaaaaaaaaaaaaaa":"brain explosion", "uuuuuuuuuuuuuuu":"when someone clicks the uuuuuuu button", "ues":"yes", "aggagaagagagag":"angry/frustrated", "xd":"funny", "i guess ...":"hm yup it seems ..."};
    much more...
    */

}
module.exports = morgan;