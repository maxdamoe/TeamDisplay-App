const Manager = require('../lib/manager.js');

test('creates an manager object', () => {
    const employee = new Employee('Dave');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.agility).toEqual(expect.any(String));
    expect(employee.getName()).toHaveProperty('name')
  });
