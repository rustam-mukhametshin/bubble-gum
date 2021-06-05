const path = require('path');
const {removeFirstAndLastChar} = require("./removeFirstAndLastChar");

const tasks = [
    {
        test: 'Hello',
        solution: 'ell'
    },
    {
        test: 'WeakRef',
        solution: 'eakRe'
    },
    {
        test: 'Backbencher',
        solution: 'ackbenche'
    },
    {
        test: 'Backbencher sits at the Back',
        solution: 'ackbencher sits at the Bac'
    },
];

describe(path.basename(__filename), () => {
    for (let task of tasks) {
        it(`should return '${task.solution}'`, done => {
            expect(removeFirstAndLastChar(task.test))
                .toEqual(task.solution);
            done();
        });
    }
});
