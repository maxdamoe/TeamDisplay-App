const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.agility).toEqual(expect.any(String));
    expect(employee.getName()).toHaveProperty('name')
  });
