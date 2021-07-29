const Intern = require('../lib/intern.js');

test('creates an intern object', () => {
    const employee = new Intern('James', '5', 'intern@company.com', 'Ohio State');
  
    expect(employee.name).toBe('James');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
    expect(employee.getName()).toEqual('James')
  });
