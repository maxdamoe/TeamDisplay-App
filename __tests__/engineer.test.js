const Engineer = require('../lib/engineer.js');

test('creates an engineer object', () => {
    const employee = new Employee('Dave');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.agility).toEqual(expect.any(String));
    expect(employee.getName()).toHaveProperty('name')
  });
