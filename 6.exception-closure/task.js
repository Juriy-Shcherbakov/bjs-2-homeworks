function parseCount(numberCheck) {

    const numberValid = Number.parseInt(numberCheck);
  
    if (isNaN(numberValid)) {
      throw new Error("Невалидное значение");
    } 
    
    return numberValid;
}
    
function validateCount (numberCheck) {
    
    try {
      return parseCount(numberCheck);
    } catch (error) {  
      return error;
    }
} 


// 2 задача - Треугольник

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || b + c < a || c + a < b) {
         throw new Error("Треугольник с такими сторонами не существует");    
        }
        
    }


    getPerimeter() {
        let Perimeter = this.a + this.b + this.c;
    
        return Number(Perimeter);
    }

    getArea() {
        let p = 0.5 * (this.a + this.b + this.c);
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);

    } catch {        
        return {
            getPerimeter() {
              return 'Ошибка! Треугольник не существует'
            },
            getArea() {
              return 'Ошибка! Треугольник не существует'
            },
        }
    }

}