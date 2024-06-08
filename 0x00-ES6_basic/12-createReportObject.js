export default function createReportObject(employeesList) {
  let allEmployees = {};

  // Loop through each department in the employeesList
  for (let department in employeesList) {
    // Use spread syntax to get all employees in the department
    allEmployees[department] = [...employeesList[department]];
  }

  return {
    allEmployees,
    // Define the getNumberOfDepartments method
    getNumberOfDepartments: function() {
      // Return the number of departments
      return Object.keys(this.allEmployees).length;
    }
  };
}
