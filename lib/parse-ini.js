class Xreg {
    constructor(xreg) {
        this.xreg = xreg;
    }
}

class Comment extends Xreg {
    constructor(){
        super(/^\s*;.*$/y);
    }
}

class Section extends Xreg {
    constructor() {
        super(/^\s*\[\s*([^\]]*)\s*\]\s*$/);
    }
}

class KeyValue extends Xreg {
    constructor() {
        super(/^\s*([^=]+?)\s*=\s*(.*?)\s*$/);
    }
}

module.exports = string => {


    const COMMENT = new Comment();
    const SECTION = new Section();
    const KEYVALUE = new KeyValue();

    var value = {};
    var lines = string.split(/[\r\n]+/);
    var section = null;
    lines.forEach(element => {
        if (COMMENT.xreg.test(element)) {
            return;
        } else if (KEYVALUE.xreg.test(element)) {
            var match = element.match(KEYVALUE.xreg);
            if (section) {
                value[section][match[1]] = match[2];
            } else {
                value[match[1]] = match[2];
            }
        } else if (SECTION.xreg.test(element)) {
            var match = element.match(SECTION.xreg);
            value[match[1]] = {};
            section = match[1];
        } else if (element.lenght == 0 && section) {
            section = null;
        };
    });
    return value;
};