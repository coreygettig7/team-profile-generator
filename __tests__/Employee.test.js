const Employee = require('../lib/Employee.js');

test('create employee object', () => {
    const employee = new Employee('Dwight', '01', 'SchruteFarms@sample.com');
  
    expect(employee.name).toBe('Dwight');
    expect(employee.id).toBe('01');
    expect(employee.email).toBe('SchruteFarms@sample.com');
});
  
test('gets employee name', () => {
    const employee = new Employee('Dwight', '01', 'SchruteFarms@sample.com');
  
    expect(employee.getName()).toBe('Dwight');
});
  
test('gets employee id', () => {
    const employee = new Employee('Dwight', '01', 'SchruteFarms@sample.com');
  
    expect(employee.getId()).toBe('01');
});
  
test('gets employee email', () => {
    const employee = new Employee('Dwight', '01', 'SchruteFarms@sample.com');
  
    expect(employee.getEmail()).toBe('SchruteFarms@sample.com');
});
  
test('gets employee role', () => {
    const employee = new Employee('Dwight', '01', 'SchruteFarms@sample.com');
  
    expect(employee.getRole()).toBe('Employee');
});