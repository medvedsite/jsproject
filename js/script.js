(function () {
    'use strict';
    // this function is strict...
}());

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('budget-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    approveExpensesBtn = document.getElementsByTagName('button')[0],
    approveOptionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIcome = document.querySelector('.choose-income'),
    savings = document.querySelector('.savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;



startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();  
});

approveExpensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b; // сложили все числа
        } else {
            console.log('Произошла ошибка');
            i--;
        }
    }
    expensesValue.textContent = sum;
});

approveOptionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function() {
    appData.dailyMoney = (appData.budget / 30).toFixed();
    25 min
});




let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {

    },
    detectDayBudget: function () {
        appData.dailyMoney = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.dailyMoney);
    },
    detectLevel: function () {
        if (appData.dailyMoney < 100) {
            console.log('Нищий');
        } else if (appData.dailyMoney > 100 && appData.dailyMoney < 2000) {
            console.log('Средний уровень дохода');
        } else if (appData.dailyMoney > 2000) {
            console.log('Высокий уровень дохода');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Введите сумму сбережний', ''),
                percent = +prompt('Под какой процент вкладываете ?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {

    },
    chooseIncome: function () {
        let items = prompt('Что принисёт дополнительный доход? Перечислите через запятую', '');
        if ((typeof (items)) === "string" && (typeof (items)) != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что то ещё?', ''));
            appData.income.sort();
            appData.income.forEach(function (items, i) {
                alert("Способы доп. заработка: " + (i + 1) + ' - ' + items);
            });
        } else {
            console.log('Не записал доп доход');
        }
    }
};
for (let key in appData) {
    console.log('Наша программа включает в себя данные ' + key + ' - ' + appData[key]);
}