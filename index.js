const lettersRegex = /^[a-zA-Z\s]+$/g


function numberInput(msg) {
  let numStr = prompt(msg)
  return validateNumber(numStr) ? Number(numStr) :
    null
}

function ageInput(msg) {
  let ageStr = prompt(msg)
  return validateNumber(ageStr) && 0 < ageStr && ageStr <= 125 ?
    Number(ageStr) :
    null
}

function wordInput(msg) {
  let wordStr = prompt(msg)
  return validateLetters(wordStr) && wordStr !== "" ? wordStr : null
}

function validateNumber(str) {
  return str === `${Number(str)}`
}

function validateLetters(str) {
  return str.match(lettersRegex)
}

//Exercise 1
function exercise1(num1, num2) {
  let number1 = validateNumber(num1) ? Number(num1) : null
  let number2 = validateNumber(num2) ? Number(num2) : null
  return Math.abs(num1 + num2).toFixed(2)
}

//Exercise 2
function exercise2(n) {
  if (n > 0) {
    console.log("bauuuba")
    exercise2(n - 1)
  }
}

//Exercise 3
const myArray = [2, 1, 3, 5, 4]
//Filtrado
const filteredArray = myArray.filter((num) => num > 2)
//Reduccion
const reducedArray = myArray.reduce((acc, num) => acc + num)
//Recollecion
const recollectedArray = myArray.map((num) => num * num)

//Exercise 4
const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

function exercise4(matrix) {
  const flattenedMatrix = flattenMatrix(matrix)
  const average = arrayAverage(flattenedMatrix)
}

function flattenMatrix(matrix) {
  return matrix.reduce((acc, next) => {
    acc.concat(next)
  }, [])
}

function arrayAverage(arr) {
  return arr.reduce((acc, next) => acc + next)/arr.length
}

//Exercise 5
const libros = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    resumen: function() {
      return `${this.titulo}, escrito por ${this.autor}, tiene ${this.paginas} páginas.`;
    }
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    paginas: 1072,
    resumen: function() {
      return `${this.titulo}, escrito por ${this.autor}, tiene ${this.paginas} páginas.`;
    }
  },
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,
    resumen: function() {
      return `${this.titulo}, escrito por ${this.autor}, tiene ${this.paginas} páginas.`;
    }
  }
];

//Exercise 6
const testArray = [6, 7, 8, 9, 10]

function filtrarYTransformar(arr) {
  return arr.filter((num) => num % 2 === 0).map((num) => num * 2);
}

//Exercise 7
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  hablar() {
    return `A ${this.nombre} goes "HRUBAAAADUPAAAKA"`;
  }
}

class Perro extends Animal {
  hablar() {
    return `A Perro called ${this.nombre} goes "Quillo ese cachopo los vas a terminar entero?"`
  }
}

class Gato extends Animal {
  hablar() {
    return `A Gato called ${this.nombre} goes "He eradicado mitad de la poblacion de pajaros en Andalucia"`
  }
}

//Exercise 8
class Estudiante {
  static gradeToPass = 5
  #nombre;
  #edad;
  #notas;

  constructor(nombre, edad, notas = []) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#notas = notas;
  }

  addNota(nota) {
    this.#notas.push(nota);
  }

  getAverageNota() {
    return this.#notas.length > 0 ?
    this.#notas.reduce((acc, num) => acc + num) / this.#notas.length:
    0
  }

  getPassed() {
    return this.getAverageNota() >= Estudiante.gradeToPass
  }
}

//Exercise 9
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const asciiCode = char.charCodeAt(0);
    const base = asciiCode >= 65 && asciiCode <= 90 ? 65 : 97;

    return String.fromCharCode(((asciiCode - base + 13) % 26) + base);
  });
}

//Exercise 10
function getMonthIntInput() {
  const msg = "Enter a number between 1 and 12 for a month of the year to see how many days it has"
  let monthInt = null

  while (monthInt === null) {
    let input = numberInput(msg)
    if (input !== null && 0 < input <= 12) {
      monthInt = input
    }
  }
  return monthInt;
}

function getDaysInMonth(monthInt) {
  const daysInMonth = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }
  return daysInMonth[monthInt];
}

//Exercise 11
function diceThrow() {
  return (Math.ceil(Math.random() * 6))
}

function doubleDiceThrow() {
  return diceThrow() + diceThrow()
}

const throws = 3600
function exercise11(throws) {
  let results = {}
  for (let i = 0; i < throws; i++) {
    results[doubleDiceThrow()] = results[doubleDiceThrow()]++ || 1;
  }
  return results;
}

//Exercise 12
//TODO
function getFindPairsInt() {
  let num1 = null
  let num2 = null

  while (num1 === null || 100 < num1 <= 0) {
    num1 = numberInput()
  }
  while (num2 === null || 100 < num2 <= 0) {
    num2 = numberInput()
  }
  return [num1, num2];
}
function findPairs(numArray) {
  const evenNumbers = []
  for (let i = Math.abs(numArray[0] - numArray[1]); i > 0; i--) {
    i % 2 === 0 ? evenNumbers.push(i) : null
  }
  return evenNumbers
}

//Exercise 13
const items = [
  { name: "Item 1", price: 10.99 },
  { name: "Item 2", price: 15.49 },
  { name: "Item 3", price: 7.99 },
  { name: "Item 4", price: 20.00 },
  { name: "Item 5", price: 12.75 }
];

function calcularSumaPrecios(arr) {
  return arr.reduce((a, b) => a + b.price, 0);
}

//Exercise 14
function getLeapYearRange() {
  let year1 = null
  let year2 = null

  while (year1 === null || 2500 < year1 <= 2001) {
    year1 = numberInput()
  }
  while (year2 === null || 2500 < year2 <= 2001) {
    year2 = numberInput()
  }
  return [year1, year2];
}

function isLeapYear(yearArray) {
  const leapYears = []
  let startYear = Math.min(yearArray[0], yearArray[1])
  const endYear = Math.max(yearArray[0], yearArray[1])

  for (startYear; startYear <= endYear; startYear++) {
    if ((startYear % 4 === 0 && startYear % 100 !== 0) || (startYear % 400 === 0)) {
      leapYears.push(startYear)
    }
  }
  return leapYears
}

//Exercise 15

// Function: rot13
// Description: Applies the ROT13 cipher to a string, shifting each letter by 13 positions
// in the alphabet while keeping the case (uppercase or lowercase) intact.
// Letters that exceed 'Z' or 'z' wrap around to the start of the alphabet.
// Non-alphabetic characters remain unchanged.

function rot13DepYDoc(str) {
  // Replace each alphabetical letter using the regular expression [a-zA-Z]
  return str.replace(/[a-zA-Z]/g, (char) => {
    // Get the ASCII code of the current character
    const asciiCode = char.charCodeAt(0);

    // Determine if the character is uppercase (A-Z) or lowercase (a-z) by checking its ASCII code
    const base = asciiCode >= 65 && asciiCode <= 90 ? 65 : 97;

    // Calculate the new letter shifted by 13 positions in the alphabet
    // (asciiCode - base): Normalize the letter to a 0-25 index
    // +13: Shift by 13 positions in the alphabet (ROT13)
    // %26: Ensure the index stays within the alphabetic range (0 to 25)
    // + base: Convert back to the correct ASCII range (uppercase or lowercase)
    return String.fromCharCode(((asciiCode - base + 13) % 26) + base);
  });
}

// Tests:

// Test 1: Simple text with mixed upper and lower case letters
console.log(rot13DepYDoc("Hello, World!"));
// Expected: "Uryyb, Jbeyq!"

// Test 2: All uppercase letters
console.log(rot13DepYDoc("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
// Expected: "NOPQRSTUVWXYZABCDEFGHIJKLM"

// Test 3: All lowercase letters
console.log(rot13DepYDoc("abcdefghijklmnopqrstuvwxyz"));
// Expected: "nopqrstuvwxyzabcdefghijklm"

// Test 4: Text with special characters and numbers
console.log(rot13DepYDoc("123!@# abc DEF"));
// Expected: "123!@# nop QRS"

// Test 5: Already ROT13 encrypted text (testing reversibility)
console.log(rot13DepYDoc("Uryyb, Jbeyq!"));
// Expected: "Hello, World!" (should return to the original text)

//Exercise 16
function createCharacter(name, race, level, hp) {
  const maxHP = 100;

  return {
    name,
    race,
    level,
    hp,

    setHP(newHP) {
      if (newHP <= 0) {
        this.resetCharacter();
      } else {
        this.hp = newHP;
      }
    },

    attack(target, dmg) {
      target.isAttacked(dmg);
    },

    isAttacked(dmg) {
      this.setHP(this.hp - dmg);
    },

    heals(value) {
      this.hp + value > maxHP
          ? this.hp = maxHP
          : this.hp += value;
    },

    resetCharacter() {
      this.level = 1;
      this.hp = maxHP;
    }
  };
}

// Example of usage
const char1 = createCharacter("Aragon", "Human", 5, 80);
const char2 = createCharacter("Legolas", "Elf", 4, 60);

//Exercise 17

//Note all validation will be run before instancing classes and can be found at the top of this file
class Producto {
  #minQuantity = 0;
  #name;
  #category;
  #price;
  #quantity;

  constructor(name, category, price, quantity = 0) {
    this.#name = name;
    this.#category = category;
    this.#price = price;
    this.#quantity = quantity;
  }

  setQuantity(newQuantity) {
    newQuantity < this.#minQuantity ?
        this.#quantity = this.#minQuantity :
        this.#quantity = newQuantity;
  }

  actualizarStock(cantidad) {
    this.setQuantity(this.#quantity - cantidad);
  }
}

class Inventario {
  #products = {};

  constructor(products) {
    this.#products = products;
  }

  addProduct(newProduct) {
    this.#products[newProduct.id] = newProduct;
  }

  deleteProduct(name) {
    return this.#products.name ?
        delete this.#products[name] :
        null
  }

  findProduct(name) {
    return this.#products[name] || null;
  }
}

//Exercise 18
function validateDiscount(discount) {
  if (100 > discount < 0) {
    throw new Error("El descuento no es valido")
  }
}

function validatePrice(price) {
  if (price < 0) {
    throw new Error("El precio no es valido")
  }
}

function calcularPrecioFinal(precioBase, descuentos) {
  let result = precioBase;

  for (descuento in descuentos) {
    result -= (result * descuento)
  }
  return result;
}

function mostrarPrecioFinal(precioBase, descuentos) {
  `El precio final después de aplicar los descuentos es: ${calcularPrecioFinal(precioBase, descuentos)}`
}


