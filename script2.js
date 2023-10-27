let fullName = 'Parviz Babazada Elshad'
console.log(fullName);
// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
fullNameCharacters = fullName.split('');
console.log(fullNameCharacters);
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
fullNameSplitted = fullName.split(' ');
fullName_surnameFirst = [fullNameSplitted[1], fullNameSplitted[0], fullNameSplitted[2]]
console.log(fullName_surnameFirst);
// 3) Alinan yeni arrayi stringe cevirin(join)
joinedfullName_surnameFirst = fullName_surnameFirst.join(' ');
console.log(joinedfullName_surnameFirst);



let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        count++;
    }
}
console.log(count);
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
let repeatingNumbers = new Set();
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
    repeatingNumbers.add(arr[i]);
  }
}
let sortedRepeatingNumbers = Array.from(repeatingNumbers).sort((a, b) => a - b);
console.log(sortedRepeatingNumbers);


//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
let maxNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
    maxNumber = arr[i];
  }
}
count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxNumber) {
        count++;
    }
}
console.log(`En boyuk reqem: ${maxNumber}. ${count} defe tekrarlanib`)
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
if(arr.includes(fullNameSplitted[0].length)){
    console.log(`Parviz adinda ${fullNameSplitted[0].length} herf var, ve ${fullNameSplitted[0].length} arrayda var`)
} else {
    console.log(`Parviz adinda ${fullNameSplitted[0].length} herf var, ve ${fullNameSplitted[0].length} arrayda yoxdur`)
}

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 2) {
      console.log(`arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexi: ${i}`);
      break;
    }
}

//10) arraydaki en boyuk reqemin ilk indexini tapin
maxNumber = arr[0];
index = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
    maxNumber = arr[i];
    maxIndex = i;
  }
}
console.log(`Arraydaki en boyuk element ${maxNumber}dir, ve indexi ${maxIndex}.`);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
indexesOf4 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    indexesOf4.push(i);
  }
}
console.log(`4 reqeminin indexleri: ${indexesOf4.join(', ')}`);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
smallestIndexOf5 = 0;
largestIndexOf5 = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      if (smallestIndexOf5 === 0) {
        smallestIndexOf5 = i;
      }
      largestIndexOf5 = i;
    }
}
console.log(`5 reqeminin en kicik indexi ${smallestIndexOf5}, en boyuk indexi ${largestIndexOf5}`);
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
greaterThan2 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 2) {
    greaterThan2.push(arr[i]);
  }
}
console.log(`"arr" - arrayindan reqemleri 2 den boyuk olan yeni array ile "arr" arrayinin uzunluqlari ferqi: ${arr.length - greaterThan2.length}`);
//14) 7 reqeminin indexleri cemini tapin.
sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 7) {
    sum += i;
  }
}
console.log(`7 reqeminin indexleri cemi: ${sum}`);


let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
arr3 = arr2.filter(item => item.name.startsWith('t'));
console.log(arr3);
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
arr3 = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t'));
console.log(arr3.length);
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
sum = arr3.reduce((acc, item) => acc + item.key, 0);
console.log(sum);
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
arr3 = arr2.map(item => {
    if (item.name.endsWith('e')) {
      return { ...item, name: 'SuperDev' };
    }
    return item;
    });
console.log(arr3);
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
longestName = arr2.reduce((acc, item) => {
    if (item.name.length > acc.name.length) {
      return item;
    }
    return acc;
    });
console.log(longestName.key);
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
console.log(Math.pow(longestName.key, 2));
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
arr3 = arr2.filter(item => item.name.length > 4);
console.log(arr3);
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
arr3 = arr2.reduce((acc, item) => {
    if (item.key > acc.key) {
      return item;
    }
    return acc;
    });  
console.log(arr3.name);
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

//son ikisini yaza bilmedim
