//ps-no-12

class Person {
  public firstName = ''
  public lastName = ''

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

class Employee extends Person {
  public salary: number

  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName)
    this.salary = salary
  }

  displaySalary(): void {
    console.log(`Salary:`, this.salary)
  }
}

class Student extends Person {
  public score: number

  constructor(firstName: string, lastName: string, score: number) {
    super(firstName, lastName)
    this.score = score
  }

  getPercentageMark(): number {
    return (this.score / 100) * 100
  }
}

const employee = new Employee('Eren', 'N', 4000)
employee.displaySalary()

const student = new Student('Jeren', 'N', 555)
const percentageMark = student.getPercentageMark()
console.log(`Percentage Mark: ${percentageMark}%`)