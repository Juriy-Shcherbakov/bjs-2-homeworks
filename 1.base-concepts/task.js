'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d;

  d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  }
  else if (d === 0) {
    arr[0] = -b / (2 * a);
    return arr;
  }
  else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if ((percent <= 0) || (Number.isNaN(Number(percent)))) {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;    
  };
  if ((contribution < 0) || (Number.isNaN(Number(contribution)))) {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;   
  };
  if ((amount <= 0) || (Number.isNaN(Number(amount)))) {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;  
  };
  if (new Date() >= date) {
  return `Параметр <date> содержит неправильное значение ${date}`; 
  };
     
  let totalAmount;  
  let dateNow = new Date();
  let nowYear = dateNow.getFullYear();
  let nowMont = dateNow.getMonth();
  let nowDay = dateNow.getDate();
  let dateEnd = new Date(date); 
  let еndYear = dateEnd.getFullYear();
  let еndMonth = dateEnd.getMonth();
  let еndDay = dateEnd.getDate(); 
  let monthAdd = 0;  

  if (((29 - nowDay) + еndDay) >= 30) {
  monthAdd = 1; // поправка в СРОК КРЕДИТА когда даты начала и конца разные
  };
     
  let totalMonth = (еndYear * 12 + еndMonth) - (nowYear * 12 + nowMont) + monthAdd;
  let basicPartAmount = amount - contribution;  // тело кредита Р
  percent /= 100;   // проценты в целое число
  let P = percent / 12;
  let amountInMonth = basicPartAmount * (P + (P / (((1 + P) ** totalMonth) - 1)));    
  totalAmount = amountInMonth * totalMonth;
  
  return Number (totalAmount.toFixed(2));
}
