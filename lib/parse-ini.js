class Xreg {
    constructor(xreg) {
        this.xreg = xreg;
    }
    match(line) {
        var m = line.match(this.xreg);
        return m;
    }
}

class Whites extends Xreg {
    constructor() {
        super(/\s+/y);
    }
    match(line) {
        return;
    }
}

class Comment extends Xreg {
    constructor() {
        super(/^\s*;.*$/y);
    }
    match(line) {
        return;
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


    const WHITES = new Whites();
    const COMMENT = new Comment();
    const SECTION = new Section();
    const KEYVALUE = new KeyValue();

    const XREGS = [WHITES, COMMENT, SECTION, KEYVALUE];

    var object = {};
    var lines = string.split(/[\r\n]+/);
    var section = null;

    for (let index = 0; index < lines.length; index++) {
        XREGS.forEach(xreg => {
            if (xreg.xreg.test(lines[index])) {
                var match = xreg.match(lines[index]);
                
            }
        });
        
    }
    return object;
};