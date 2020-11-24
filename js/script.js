const number = document.querySelector('#number');
const current = document.querySelector('#current');
const long = document.querySelector('#long');

const numbers = {
  0: 'Zero',
  1: 'Um',
  2: 'Dois',
  3: 'Três',
  4: 'Quatro',
  5: 'Cinco',
  6: 'Seis',
  7: 'Sete',
  8: 'Oito',
  9: 'Nove',
  10: 'Dez',
  11: 'Onze',
  12: 'Doze',
  13: 'Treze',
  14: 'Quatorze',
  15: 'Quinze',
  16: 'Dezesseis',
  17: 'Dezessete',
  18: 'Dezoito',
  19: 'Dezenove',
  20: 'Vinte',
  30: 'Trinta',
  40: 'Quarenta',
  50: 'Cinquenta',
  60: 'Sessenta',
  70: 'Setenta',
  80: 'Oitenta',
  90: 'Noventa',
  100: 'Cem',
  101: 'Cento',
  200: 'Duzentos',
  300: 'Trezentos',
  400: 'Quatrocentos',
  500: 'Quinhentos',
  600: 'Seiscentos',
  700: 'Setecentos',
  800: 'Oitocentos',
  900: 'Novecentos'
};

function changeNumbers() {
  current.value = number.value;

  if (number.value <= 19) {
    long.value = numbers[number.value];
  } else if (number.value >= 20 && number.value <= 99) {
    long.value = number.value[1] != 0 ? `${numbers[number.value[0] + 0]} e ${numbers[number.value[1]]}` : numbers[number.value];
  } else if (number.value >= 100 && number.value <= 999) {

    if (number.value[1] != 0 && number.value[2] != 0) {
      long.value = `${numbers[number.value[0] + 0 + 0]} e ${numbers[number.value[1] + 0]} e ${numbers[number.value[2]]}`;
    } else if (number.value[1] == 0 && number.value[2] != 0) {
      long.value = `${numbers[number.value[0] + 0 + 0]} e ${numbers[number.value[2]]}`;
    } else if (number.value[1] != 0 && number.value[2] == 0) {
      long.value = `${numbers[number.value[0] + 0 + 0]} e ${numbers[number.value[1] + 0]}`;
    } else {
      long.value = numbers[number.value];
    }

  }

}

changeNumbers();

number.addEventListener('input', changeNumbers);