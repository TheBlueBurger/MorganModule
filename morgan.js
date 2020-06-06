const morgan = {
    boredom: -69,
    minBored: 0,
    maxBored: 10,
    setBoredom: (boredom) => {
        morgan.boredom = boredom;
        return morgan.getBoredomLevel();
    },
    setMinMaxBoredom: (min, max) => {
        morgan.minBored = min || morgan.minBored;
        morgan.maxBored = max || morgan.maxBored;
        morgan.minBored = min == undefined ? morgan.minBored : min;
        morgan.maxBored = max == undefined ? morgan.maxBored : max;
        return {min:min, max:max};
    },
    getMaxBoredomLevel: () => {
        return morgan.maxBored;
    },
    getNicknames: () => {
        return ["TheCodeMesser", "TheCodeSkidder", "TheDesignMesser", "xlagroskinix", "Clyde69"];
    },
    getMinBoredomLevel: () => {
        return morgan.minBored;
    },
    getBoredomLevel: () => {
        let randBoredom = Math.floor(Math.random() * morgan.getMaxBoredomLevel() + 1);
        if(randBoredom != morgan.boredom && morgan.boredom != -69) { // if its not deafult it will set it i dont think anyone will set it to -69 cus its out of range anyway
            randBoredom = morgan.boredom;
        }
        if(randBoredom < morgan.getMinBoredomLevel || randBoredom > morgan.getMaxBoredomLevel) {
            throw new RangeError("morgan is too bored!!");
        }
    },
    isBored: () => {
        return morgan.getBoredomLevel() > morgan.getMinBoredomLevel();
    },
    brain: {
        think: (about, cb) => {
            if(about == null) {
                about = "morgan";
            }
            if(cb == null) {
                cb = (res) => {console.log(res)};
            }
            cb("hmmmmmmmmmm me thinking so shut ;]");
            setTimeout(() => {cb(`ok im done thinking ${about} is very big (/shrug :dogdance-1:)`)}, 1000 * Math.floor(Math.random() * 15));
        },
        doSomething: () => {
            let quotes = ["ok i did something bye bye", "AAAAAAAAAAAAAAAAAA", "no u", "hm nu", "oh ok", "working on util...",
             "working on morgzhack...", "working on recyclebot..."];
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
