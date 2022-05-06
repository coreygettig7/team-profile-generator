const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Creed', '05', 'oddfellow@sample.com', 'dontaskme');

    expect(engineer.name).toBe('Creed');
    expect(engineer.id).toBe('05');
    expect(engineer.email).toBe('oddfellow@sample.com');
    expect(engineer.github).toBe('dontaskme');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Creed', '05', 'oddfellow@sample.com', 'dontaskme');

    expect(engineer.getGithub()).toBe('dontaskme');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Creed', '05', 'oddfellow@sample.com', 'dontaskme');

    expect(engineer.getRole()).toBe('Engineer');
});