// document.getElementById('subhanallaincrement').addEventListener('click', function(){
//     subhanallavalu +=1;
//     subhanalladis.innerText = subhanallavalu;

// })

// subhanallah
const subhanalladis = document.getElementById('subhanalladis');
const subhanallaincrement = document.getElementById('subhanallaincrement');
const subhanalladecrement = document.getElementById('subhanalladecrement');

// alhambulilla
const alhambululladis = document.getElementById('alhambululladis');
const alhamdulillaincrement = document.getElementById('alhamdulillaincrement');
const alhambululladecrement = document.getElementById('alhambululladecrement');


// allahhuakber ..........
const allahhuakberdis = document.getElementById('allahhuakberdis');
const allahhuakberincrement = document.getElementById('allahhuakberincrement');
const allahhuakberdecrement = document.getElementById('allahhuakberdecrement');

// reset
const reset = document.getElementById('reset');



let subhanallavalu = 0;
let alhamdulillavalu = 0;
let allahhuakbarvalu = 0;

// subhanallah
subhanallaincrement.addEventListener('click', function () {
    if (subhanallavalu === 33) {
        return alert('Your subhanalla is completed')

    }
    subhanallavalu += 1;
    subhanalladis.innerText = subhanallavalu;

})

subhanalladecrement.addEventListener('click', function () {
    if (subhanallavalu === 0) {

        return alert(`you are start`)
    }
    subhanallavalu -= 1;
    subhanalladis.innerText = subhanallavalu;
});


// alhamdullah................

alhamdulillaincrement.addEventListener('click', function () {
    if (alhamdulillavalu === 33) {
        return alert` subhanalla copleted`
    }
    alhamdulillavalu += 1;
    alhambululladis.innerText = alhamdulillavalu;

});

alhambululladecrement.addEventListener('click', function () {
    if (alhamdulillavalu === 0) {
        return alert`please red`
    }
    alhamdulillavalu -= 1;
    alhambululladis.innerText = alhamdulillavalu;
})

// allahhuakber

allahhuakberincrement.addEventListener('click', function () {
    if (allahhuakbarvalu === 34) {
        return alert` subhanalla copleted`
    }
    allahhuakbarvalu += 1;
    allahhuakberdis.innerText = allahhuakbarvalu;

});

allahhuakberdecrement.addEventListener('click', function () {
    if (allahhuakbarvalu === 0) {
        return alert`please red`
    }
    allahhuakbarvalu -= 1;
    allahhuakberdis.innerText = allahhuakbarvalu;
});



// reser ,,,,,,,,,,,,,,,

reset.addEventListener('click', function () {

     subhanallavalu = 0;
     alhamdulillavalu = 0;
     allahhuakbarvalu = 0;

     subhanalladis.innerText = 0;
     alhambululladis.innerText = 0;
     allahhuakberdis.innerText = 0;

})





