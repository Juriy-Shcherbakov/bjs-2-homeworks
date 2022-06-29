function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash = args.join(','); // получаем правильный хэш
      let idx = cache.findIndex( (item) => item.hash === hash );  // ищем элемент, хэш которого равен нашему хэшу
      
      if (idx !== -1 ) { // если элемент не найден
        console.log("Из кэша: " + cache[idx].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[idx].value;
      }

      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash: hash, value: result}) ; // добавляем элемент с правильной структурой
      
      if (cache.length > 5) { 
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
     
      console.log("Вычисляем: " + result);

      return "Вычисляем: " + result;  
  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let debounse = false;
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
  
    timerId = setTimeout(() => {
      func(...args);
    }, ms)
  
    if (!debounse) {
      func(...args);
      debounse = true
    }
  }
}


function debounceDecorator2(func, ms) {
  let debounse = false;
  let timerId;
  
  function wrapper(...args) {
    clearTimeout(timerId);

    timerId = setTimeout( () => {
      func(...args);
      wrapper.count += 1;
    }, ms);

    if (!debounse) {
      func(...args);
      wrapper.count += 1;
      debounse = true;
    }
  }

  wrapper.count = 0
  
  return wrapper;
};
