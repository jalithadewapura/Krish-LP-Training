const employees = require('../data/employees.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class EmployeeService extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {}

    getEmployees(args) {
        return _.filter(employees, args);
    }

    getEmployeeById(id) {
        return employees.filter((e) => e.id == id)[0];
    }
}

module.exports = EmployeeService;