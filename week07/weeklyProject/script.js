/**
 * Created by cw on 2017-05-04.
 */
'use strict';

var picList = [
    {
        img:'img/Fox.jpg',
        title: 'The Fox looks back',
        description: 'Lorem ipsum dolor sit amet, libris iisque scripta et mel. Autem definiebas philosophia ea vis. Eos sanctus omittam molestiae at, eius viris audiam at per. Tale labitur virtute nam in, ei cum hinc ridens efficiendi. Vis luptatum voluptaria in.'
    },
    {
        img:'img/frog.jpg',
        title: 'Friggy Froggy',
        description: 'Lorem ipsum dolor sit amet, libris iisque scripta et mel. Autem definiebas philosophia ea vis. Eos sanctus omittam molestiae at, eius viris audiam at per. Tale labitur virtute nam in, ei cum hinc ridens efficiendi. Vis luptatum voluptaria in.'
    },
    {
        img:'img/forest.jpg',
        title: 'Dark forest',
        description: 'Lorem ipsum dolor sit amet, libris iisque scripta et mel. Autem definiebas philosophia ea vis. Eos sanctus omittam molestiae at, eius viris audiam at per. Tale labitur virtute nam in, ei cum hinc ridens efficiendi. Vis luptatum voluptaria in.'
    },
    {
        img:'img/road.jpg',
        title: 'Highway to Heaven',
        description: 'Lorem ipsum dolor sit amet, libris iisque scripta et mel. Autem definiebas philosophia ea vis. Eos sanctus omittam molestiae at, eius viris audiam at per. Tale labitur virtute nam in, ei cum hinc ridens efficiendi. Vis luptatum voluptaria in.'
    },
    {
        img:'img/house.jpg',
        title: 'Creepy house',
        description: 'Lorem ipsum dolor sit amet, libris iisque scripta et mel. Autem definiebas philosophia ea vis. Eos sanctus omittam molestiae at, eius viris audiam at per. Tale labitur virtute nam in, ei cum hinc ridens efficiendi. Vis luptatum voluptaria in.'
    },
    {
        img:'img/ships.jpg',
        title: 'The skeletons ships',
        description: 'Lorem ipsum dolor sit amet, libris iisque scripta et mel. Autem definiebas philosophia ea vis. Eos sanctus omittam molestiae at, eius viris audiam at per. Tale labitur virtute nam in, ei cum hinc ridens efficiendi. Vis luptatum voluptaria in.'
    },
    {
        img:'img/otherPlanet.jpg',
        title: 'Mountains of another planet',
        description: 'Lorem ipsum dolor sit amet, libris iisque scripta et mel. Autem definiebas philosophia ea vis. Eos sanctus omittam molestiae at, eius viris audiam at per. Tale labitur virtute nam in, ei cum hinc ridens efficiendi. Vis luptatum voluptaria in.'
    },
    {
        img:'img/blackHole.jpg',
        title: 'The Black hole event horizon',
        description: 'Lorem ipsum dolor sit amet, libris iisque scripta et mel. Autem definiebas philosophia ea vis. Eos sanctus omittam molestiae at, eius viris audiam at per. Tale labitur virtute nam in, ei cum hinc ridens efficiendi. Vis luptatum voluptaria in.'
    }

];

var index = 0;
var leftButton = document.querySelector('.button.left');
var rightButton = document.querySelector('.button.right');
var image = document.querySelector('.picture');
var picTitle = document.querySelector('h2');
var picText = document.querySelector('p');

image.setAttribute('src',picList[0]['img']);
picTitle.textContent = picList[0]['title'];
picText.textContent = picList[0]['description'];

function slideLeft() {
    if (index > 0) {
        index--;
        console.log(index);
        image.setAttribute('src',picList[index]['img']);
        picTitle.textContent = picList[index]['title'];
        picText.textContent = picList[index]['description'];
    }
}

function slideRight() {
    if (index < picList.length-1) {
        index++;
        console.log(index);
        image.setAttribute('src',picList[index]['img']);
        picTitle.textContent = picList[index]['title'];
        picText.textContent = picList[index]['description'];
    }
}

leftButton.addEventListener('click',slideLeft);
rightButton.addEventListener('click',slideRight);