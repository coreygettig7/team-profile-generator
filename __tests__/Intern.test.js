const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Andy', '07', 'acapella@sample.com', 'Cornell');

    expect(intern.name).toBe('Andy');
    expect(intern.id).toBe('07');
    expect(intern.email).toBe('acapella@sample.com');
    expect(intern.school).toBe('Cornell');
});

test('gets intern school', () => {
    const intern = new Intern('Andy', '07', 'acapella@sample.com', 'Cornell');

    expect(intern.getSchool()).toBe('Cornell');
});

test('gets intern role', () => {
    const intern = new Intern('Andy', '07', 'acapella@sample.com', 'Cornell');

    expect(intern.getRole()).toBe('Intern');
}); 