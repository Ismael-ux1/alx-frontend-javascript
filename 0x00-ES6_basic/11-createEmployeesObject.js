export default function createEmployeesObject(departmentName, employees) {
    let employeesObject = {};
    employeesObject[departmentName] = employees;
    return employeesObject;
}
