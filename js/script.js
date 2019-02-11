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

