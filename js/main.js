'use strict';

const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
itemFive.before(itemFour);


const propsItemsFour = document.querySelectorAll('.props__item_four');
propsItemsFour[3].after(propsItemsFour[0]);


const ads = document.querySelector('.ads');
ads.remove();


const propsItemSix = document.querySelectorAll('.item_six .props__item_two');
const itemTwoList = document.querySelector('.item_two .props__list');
itemTwoList.append(...propsItemSix);


const itemThreeList = document.querySelector('.item_three .props__list');
const itemFiveList = document.querySelector('.item_five .props__list');

const itemTwoTitle = document.querySelector('.item_two .item__title');
const itemFiveTitle = document.querySelector('.item_five .item__title');
const itemSixTitle = document.querySelector('.item_six .item__title');

const itemFiveContent = document.querySelector('.item_five .content');
itemFiveContent.append(itemSixTitle, itemThreeList);

itemTwoList.before(itemFiveTitle);

const itemThreeTitle = document.querySelector('.item_three .item__title');
itemThreeTitle.after(itemFiveList);

const itemSixList = document.querySelector('.item_six .props__list');
itemSixList.before(itemTwoTitle);


itemThreeTitle.remove();

const itemThreeTitleClone = itemThreeTitle.cloneNode();
const itemThreeTitleText = document.createTextNode('This и прототипы объектов');

itemThreeTitleClone.append(itemThreeTitleText);
itemFiveList.before(itemThreeTitleClone);
