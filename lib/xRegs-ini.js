class Xreg {
    constructor(xreg) {
        this.xreg = xreg;
    }
}

class Whites extends Token {
    constructor() {
        super(/\s+/y);
    }
}

class Comment extends Token {
    constructor(){
        super(/^\s*;.*$/y);
    }
}

class Section extends Token {
    constructor() {
        super(/^\s*\[\s*([^\]]*)\s*\]\s*$/);
    }
}

class KeyValue extends Token {
    constructor() {
        super(/^\s*([^=]+?)\s*=\s*(.*?)\s*$/);
    }
}
