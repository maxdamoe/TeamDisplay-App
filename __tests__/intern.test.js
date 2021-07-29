const Intern = require('../lib/intern.js');

test('creates an intern object', () => {
    const employee = new Employee('James');
  
    expect(employee.name).toBe('James');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
    expect(employee.getName()).toHaveProperty('name')
  });
