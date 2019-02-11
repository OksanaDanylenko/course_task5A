'use strict';

let imagesArr = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png',
    'images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png','images/14.png','images/15.png',
    'images/16.png','images/17.png','images/18.png','images/19.png','images/20.png'];
let namesArr = ['СУШИМАН','ФИРМЕННАЯ', 'СУПРИМ', 'ГАВАИ', 'ПАРМА', 'НЕАПОЛИТАНО', 'ПРОШУТТО', 'ГЕТЬМАНСКАЯ', 'ИТАЛЬЯНСКАЯ',
    'ПАПЕРОНИ', 'ФРУТТО ДЕ МАРЕ', 'ОХОТНИЧЬЯ', 'ЛАГУНА', 'ПРОШУТТО', 'ТРИ СЫРА', 'МАРГАРИТА', 'КОПЧЁНАЯ КУРИЦА',
    'МОНТАНАРА', 'ВЕНЕЦИАНСКАЯ', 'ПАПЕРЧИЛИ'];
let productsArr = ['Соус "унаги", угорь, окунь морской, семга, авокдо, сыр моцарелла, оливки','основа, фирменный соус "Пицца Хата", ветчина свиная, салями, ветчина куриная, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", ветчина свиная, салями, бекон, креветки, специи, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", курица, специи, сыр "Моцарелла", кукуруза, ананас, помидор',
    'основа, фирменный соус "Пицца Хата", бекон, лук, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", курица, специи, сыр "Моцарелла", кукуруза, ананас, помидор',
    'основа, фирменный соус "Пицца Хата", курица, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", аджика, куриное филе, свинина отварная, говядина отварная, лук, специи, сыр "Моцарелла", помидор, зелень',
    'основа, сливки кулинарные, шинка "Пармская", руккола, помидоры черри, крем - сыр, сыр "Пармезан", сыр "Моцарелла"',
    'основа, фирменный соус "Пицца Хата", салями, специи, сыр "Моцарелла", помидор,маслины',
    'основа, фирменный соус "Пицца Хата", морской коктейль, специи, сыр "Моцарелла", помидор, перец, маслины',
    'основа, фирменный соус "Пицца Хата", охотничьи колбаски, чернослив, огурцы маринованные, сыр "Моцарелла"',
    'основа, сливки кулинарные, креветки, специи, сыр "Моцарелла", сыр "Пармезан"',
    'основа, фирменный соус "Пицца Хата", курица, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", специи, сыр "Гауда", сыр "Рокфор", сыр "Пармезан"',
    'основа, фирменный соус "Пицца Хата", сыр "Моцарелла", специи, помидор',
    'основа, соус пикантный, копчёная курица, огурцы маринованные, специи, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", грибы свежие, специи, сыр "Моцарелла", помидор, перец, маслины',
    'основа, фирменный соус "Пицца Хата", рыба красная, лук, специи, лимонный сок, укроп, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", аджика грузинская, охотничьи колбаски, салями, специи, чили, сыр "Моцарелла", помидор'];
let caloriesArr = ['510 ккал','600 ккал','350 ккал','580 ккал','260 ккал','550 ккал','280 ккал',
    '400 ккал', '420 ккал', '558 ккал', '468 ккал', '632 ккал', '470 ккал', '550 ккал', '396 ккал', '200 ккал',
    '258 ккал', '465 ккал', '560 ккал', '358 ккал'];
let priceArr = ['360 грн', '175 грн', '220 грн', '182 грн', '165 грн', '160 грн', '180 грн', '236 грн', '242 грн',
    '143 грн', '237 грн', '143 грн', '270 грн', '180 грн', '220 грн', '132 грн', '165 грн', '132 грн', '230 грн','154 грн'];

function parseHTML (someString) {
    const parse = new DOMParser().parseFromString(someString, 'text/html');
    return parse.body.children;
}

let choose = prompt('1 - Сетка \n 2 - Список');

let unints = document.getElementsByClassName('about-pizza');
for(let i=0; i<20; i++) {
    const unit = `<img src=${imagesArr[i]} alt="pizza">
            <div>${namesArr[i]}</div>
            <div class="list-hide">${productsArr[i]}</div>
            <div class="list-hide">${caloriesArr[i]}</div>
            <div>${priceArr[i]}</div>`;
    for (let j =0; j<5; j++)
        unints[i].appendChild(parseHTML(unit)[j]);
}
if(choose == 1) {
    let noDisplayOne = document.getElementsByClassName('no-display')[0];
    let noDisplayTwo = document.getElementsByClassName('no-display')[1];
    noDisplayOne.className = '';
    noDisplayTwo.className = '';
    let menu = document.querySelector('body div:nth-child(3)');
    menu.className = 'menu-for-grid';
    let about = menu.children;
    for(let i = 0; i <about.length; i++) {
        about[i].className = 'about-pizza-for-grid';
    }

    let divFilter = document.querySelector('body > div:nth-child(1)');
    divFilter.addEventListener("click", event => {
        if(event.target.tagName != 'BUTTON' ) return;
        let filterVal = document.getElementById('filter-value-for-grid').value;
        for(let i = 0; i <about.length; i++) {
            if (about[i].classList.contains('no-display')) {
                about[i].classList = 'about-pizza-for-grid';
            }
        }
        filterByIngredient(filterVal);
    });
    divFilter.addEventListener("keyup", event => {
        if(event.target.tagName != 'INPUT' ) return;
        if(event.keyCode!=13) return;
        let filterVal = document.getElementById('filter-value-for-grid').value;
        for(let i = 0; i <about.length; i++) {
            if (about[i].classList.contains('no-display')) {
                about[i].classList = 'about-pizza-for-grid';
            }
        }
        filterByIngredient(filterVal);
    });

    let filterByIngredient = (ingr) => {
        for(let i = 0; i <about.length; i++) {
            if (about[i].children[2].innerHTML.indexOf(ingr) ==-1){
                about[i].className = 'no-display';
            }
        }
    }
}
else if (choose ==2){
    let noDisplayOne = document.getElementsByClassName('no-display')[0];
    let noDisplayTwo = document.getElementsByClassName('no-display')[2];
    noDisplayOne.className = '';
    noDisplayTwo.className = '';
    let menu = document.querySelector('body div:nth-child(3)');
    let about = menu.children;
    let hide = [];
    for(let i = 0; i <about.length; i++) {
        about[i].className = 'about-pizza-for-list';
        hide.push(about[i].children[2]);
        hide.push(about[i].children[3]);
    }
    for(let i = 0; i <hide.length; i++) {
        hide[i].className = 'list-hide-for-list';
    }
    let separ = document.querySelectorAll('.about-pizza-for-list div:nth-child(2)');
    for (let i =0; i<separ.length; i++) {separ[i].innerHTML +=' ,&nbsp';}

    let button = document.getElementById('run-for-list');

    button.addEventListener("click", ()=>{

        let radios = document.getElementsByName('filter');
        let filter;
        for (let i = 0, length = radios.length; i < length; i++){
            if (radios[i].checked){
                filter = radios[i].value;
                break;
            }
        }

        about = [].slice.call(about, 0);/*in array*/
        let parent = about.map(function(el) {
            return el.parentNode;
        });

        if(filter == 'priceToCheap') {
            about.sort((a,b)=> {
                return parseInt(b.children[4].textContent) - parseInt(a.children[4].textContent);
            }).forEach(function(el, i) {
                parent[i].appendChild(el)
            });
        }
        else if(filter == 'priceToExpensive') {
            about.sort((a,b)=> {
                return parseInt(a.children[4].textContent) - parseInt(b.children[4].textContent);
            }).forEach(function(el, i) {
                parent[i].appendChild(el)
            });
        }
        else if(filter == 'nameToZ') {
            about.sort((a,b)=> {
                return (b.children[1].textContent.toLowerCase().localeCompare(a.children[1].textContent.toLowerCase()));
            }).forEach(function(el, i) {
                parent[i].appendChild(el)
            });
        }
        else if(filter == 'nameToA') {
            about.sort((a,b)=> {
                return (a.children[1].textContent.toLowerCase().localeCompare(b.children[1].textContent.toLowerCase()));
            }).forEach(function(el, i) {
                parent[i].appendChild(el)
            });
        }
    });
}
else {
    alert('введено неверное значение!')
}