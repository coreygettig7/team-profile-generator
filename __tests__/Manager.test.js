const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Michael', '02', 'scottstots@sample.com', '137');

    expect(manager.name).toBe('Michael');
    expect(manager.id).toBe('02');
    expect(manager.email).toBe('scottstots@sample.com');
    expect(manager.officeNumber).toBe('137');
});

test('gets manager role', () => {
    const manager = new Manager('Michael', '02', 'scottstots@sample.com', '137');

    expect(manager.getRole()).toBe('Manager');
}); 