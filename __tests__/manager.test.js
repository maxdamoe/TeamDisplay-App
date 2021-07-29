const Manager = require('../lib/manager.js');

test('creates an manager object', () => {
    const employee = new Manager('Dave', '1', 'Manager@company.com', '456');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(String));
    expect(employee.getName()).toEqual('Dave')
    
  });
