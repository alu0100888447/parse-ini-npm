module.export = function (string) {

    const WHITES = /\s+/y;
    const COMMENT = /^\s*;.*$/y;
    const SECTION = /^\s*\[.+\]$/;
    const KEYVALUE = /^\s*(\w+)=(.+)\b/y;

    var value = {};
    var lines = string.split(/[\r\n]+/);
    var section = null;

    lines.forEach(element => {
        if (COMMENT.test(element)) {
            return;
        } else if (KEYVALUE.test(element)) {
            var match = element.match(KEYVALUE);
            if (section) {
                value[section][match[1]] = match[2];
            } else {
                value[match[1]] = match[2];
            }
        } else if (SECTION.test(element)) {
            var match = element.match(SECTION);
            value[match[1]] = {};
            section = match[1];
        } else if (element.lenght == 0 && section) {
            section = null;
        };
    });
    return value;
};