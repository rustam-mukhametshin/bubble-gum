const {camel} = require("./camelCase");
const path = require('path');

const tasks = [
    {
        test: 'usageNotes',
        solution: 'usage Notes'
    },
    {
        test: 'embeddedViewRef',
        solution: 'embedded View Ref'
    },
    {
        test: 'RandomizedWithSeed',
        solution: 'Randomized With Seed'
    },
    {
        test: ' ',
        solution: ''
    },
];

xdescribe(path.basename(__filename), () => {
    for (let task of tasks) {
        it(`should return '${task.solution}'`, done => {
            expect(camel(task.test))
                .toEqual(task.solution);
            done();
        });
    }
});
