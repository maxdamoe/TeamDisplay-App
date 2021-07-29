const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('Duncan', '8', 'employee@company.com');
  
    expect(employee.name).toBe('Duncan');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toEqual('Duncan')
  });
