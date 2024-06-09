export default function createIteratorObject(report) {
    let departments = Object.keys(report);
    let currentDepartmentIndex = 0;
    let employees = [];
    let currentEmployeeIndex = 0;

    return {
        next: function() {
            // If there are no more employees in the current department or it's the first call
            if (currentEmployeeIndex === employees.length) {
                if (currentDepartmentIndex === departments.length) {
                    // All departments and employees have been iterated over
                    return { done: true };
                } else {
                    // Move to the next department
                    employees = report[departments[currentDepartmentIndex]].employees;
                    currentDepartmentIndex++;
                    currentEmployeeIndex = 0;
                }
            }

            // Return the current employee and move the index to the next employee
            return { value: employees[currentEmployeeIndex++], done: false };
        }
    };
}
