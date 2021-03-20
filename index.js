// Write your solution in this file!

const employee = {
    name: '',
    streetAddress: '',

};
{
    beforeEach(function () {
        for (const key in employee) {
          delete employee[key];
        }
  
        employee.name = 'Sam';
      });
     
      function updateEmployeeWithKeyAndValue (employee, streetAddress){
        const newEmployee = {...employee};
       newEmployee[streetAddress] = '11 Broadway'; 
       
       return newEmployee;
    };

    
    function destructivelyUpdateEmployeeWithKeyAndValue (employee, streetAddress){
       
        employee[streetAddress] = '12 Broadway';
        return employee;


    };

    function deleteFromEmployeeByKey(employee, name){
        const updateEmployee = {...employee};
        delete updateEmployee.name;
        return updateEmployee;
        
        //return Object.assign({}, employee, {[name]: 'Sam'});}
        //const employee = {
            //name:'Sam',
            //streetAddress: '12 Broadway'
        }
        
        //const updatedEmployee = {
            //streetAddress: '12 Broadway',};

            //const newEmployee = deleteFromEmployeeByKey(employee, updatedEmployee);
            //delete updatedEmployee.name;

       
    };

    function destructivelyDeleteFromEmployeeByKey(employee, name,){
        delete employee[name];
        return employee;
    }

    //const newEmployee = deleteFromEmployeeByKey



