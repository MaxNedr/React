'use strict';


/**
 *Первое задание:
 * Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0),
 * callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback.
 * Если функция не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции.
 * @param times
 * @param callback
 */
function loop(times = 0, callback = null) {
    if (callback) {
        for (let i = 0; i < times; i++) {
            callback.call()
        }
    }
}

let call = function () {
    console.log('вызов переданной функции')
};

loop(5, call);


/**
 *Второе задание
 * @param param1
 * @param param2
 * @returns {{params: string, square: string}}
 */
function calculateArea(param1, param2) {
    let obj = {params: '', figure: 'Прямоугольник', square: ''};
    let count_square = param1 * param2;
    let inputParams = '';
    inputParams = String(param1) + ',' + String(param2);
    obj.params = inputParams;
    obj.square = count_square;
    console.log(obj);
    return obj
}

calculateArea(6, 2);


class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        console.log(this.name, this.age, this.dateOfBirth)
    }

}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth,);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        super.displayInfo();
        console.log(this.name, this.age, this.dateOfBirth, this.salary, this.department)
    }

}

class Developer extends Employee {
    /**
     * Установить/сменить менеджера(и вызвать добавление у менеджера тоже)
     * @param manager {object} - экземпляр класса Manager
     */
    setManager(manager) {
        if (manager instanceof Manager && this.mainManager !== manager) {
            //Если уже есть менеджер, то нужно сначала от него удалить разработчика
            if (this.mainManager) {
                this.mainManager.delDeveloper(this);
            }
            //Теперь меняем менеджера и добавляем ему нашего разработчика
            this.mainManager = manager;
            manager.addDeveloper(this);
        }
    }

    /**
     * Удалить менеджера (и вызвать удаление у менеджера тоже)
     * @param manager {object} - экземпляр класса Manager
     */
    delManager(manager) {
        if (manager instanceof Manager) {
            this.mainManager = null;
            manager.delDeveloper(this);
        }
    }

}

class Manager extends Employee {

    constructor(...args) {
        super(args[0], args[1], args[2], args[3], args[4]);
        this.arrayOfDevelopers = [];
    }

    /**
     * Добавить разработчика в массив к менеджеру (и вызвать добавление у разработчика тоже)
     * @param develop {object} - экземпляр класса Developer
     */
    addDeveloper(develop) {
        if (develop instanceof Developer && this.arrayOfDevelopers.indexOf(develop) === -1) {
            this.arrayOfDevelopers.push(develop);
            develop.setManager(this);
        }
    }

    /**
     * Удалить разработчика из массива менеджера (и вызвать удаление у раздаботчика тоже)
     * @param develop {object} - экземпляр класса Developer
     */
    delDeveloper(develop) {
        let idx = this.arrayOfDevelopers.indexOf(develop);
        if (develop instanceof Developer && idx !== -1) {
            this.arrayOfDevelopers.splice(idx, 1);
            develop.delManager(this);
        }
    }
}

let hu = new Human('test', 23, 43453);
hu.displayInfo();
let ee = new Employee('test', 23, 43453, 500, 'depart');
ee.displayInfo();

let man = new Manager('manager1', 25, 122334, 500, 'managers');
let dev = new Developer('igor', 21, 123456, 700, 'develop');
man.addDeveloper(dev);
dev.setManager(man);
console.log(man);
console.log(dev);

