var setAsOptionalArg = require('../src/atropa-setAsOptionalArg.js');

try {
    Object.keys(setAsOptionalArg).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = setAsOptionalArg[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-setAsOptionalArg.js');
}

Object.keys(setAsOptionalArg.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = setAsOptionalArg.data[prop];
    }
);
