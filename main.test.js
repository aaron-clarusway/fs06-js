const howManySeconds = require('./main');

test('return howManySeconds', () => {
    expect(howManySeconds(24)).toBe(86400);
});