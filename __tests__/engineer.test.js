const Engineer = require('../lib/engineer.js');

test('creates an engineer object', () => {
    const employee = new Engineer('Kurtis', '2', 'engineer@company.com', 'kurtisgithub');
  
    expect(employee.name).toBe('Kurtis');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
    expect(employee.getName()).toEqual('Kurtis')
    
  });
