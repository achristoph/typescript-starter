class Contact {
  name: string;
  phone: string;
  email: string;
  greet() {
    return `Hello, ${this.name}`
  }
  constructor({name, phone, email = undefined}) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

const alice = new Contact({ name: 'Alice', phone: '1234' });
console.log(JSON.stringify(alice));
console.log(alice.greet());

class Employee extends Contact {
  private _employeeID: string;
  hireDate: Date;

  get employeeID() {
    return this._employeeID;
  }

  set employeeID(value) {
    this._employeeID = (value || "").toLocaleUpperCase();
  }

  greet() {
    return super.greet() + ' employee';
  }

  constructor({name, phone, email = undefined, employeeID, hireDate}) {
    super({ name, phone, email });
    this.employeeID = employeeID;
    this.hireDate = hireDate;
  }
}

const pat = new Employee({ name: 'Pat', phone: '111', hireDate: new Date('2015-01-01'), employeeID: null });
pat.hireDate = new Date('2016-01-01');
console.log(pat.hireDate.toUTCString());
console.log(pat.employeeID);

class A {
  static count = 0;
  constructor() {
    A.count += 1;
  }
  static increase() {
    A.count += 1;
  }
}
const a = new A();
console.log(A.count);
A.increase();
console.log(A.count);

interface IShape {
  name: string;
  update: ()=>void
}
abstract class Animal implements IShape {
  abstract walk();
  name = "";
  abstract update();
}

class Dog extends Animal {
  walk(){};
  update(){};
}
