module.export = function (string) {

    const WHITES = /\s+/y;
    const COMMENT = /^;.*$/y;
    const SECTION = /^\[.+\]$/;
    const KEYVALUE = /^(\w+)=(.+)\b/y;
  
};