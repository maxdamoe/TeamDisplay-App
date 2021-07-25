const Employee = require('../lib/employee');

test('creates a player object', () => {
    const employee = new Player('Dave');
  
    expect(employee.name).toBe('Dave');
    expect(employee.health).toEqual(expect.any(Number));
    expect(employee.strength).toEqual(expect.any(Number));
    expect(employee.agility).toEqual(expect.any(Number));
  });
