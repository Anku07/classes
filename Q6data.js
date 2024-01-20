class Employee{
    constructor(name,salary){
        this.EmployeeName = name
        this.EmployeeSalary =salary
    }
    Annualsalary(){
        return this.EmployeeSalary * 12

    }
}
class Manager extends Employee {
    constructor(name,salary,department){
        super(name,salary)
        this.department = department
    }
    Annualsalary() {
        return {
            AnnualSalary :(this.EmployeeSalary * 12) + 90000}

    }
}
export { Employee, Manager}