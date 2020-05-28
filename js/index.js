'use strict';

let usersList = null;

const fetchPromise = fetch("../json/users.json");
const parseJSONPromise = fetchPromise
    .then(response => response.json())
    .catch(console.error);

async function loadUsersData(){
    await parseJSONPromise
        .then(data => usersList = data)
        .catch(console.error);

    //elements load
    for(let user of usersList){
        //Card Holder
        let userCardHolderElement = document.createElement('div');

        userCardHolderElement.setAttribute('class','userCardHolder');
        userCardHolderElement.setAttribute('id','user' + user.id);

        userCardsContainerElement.append(userCardHolderElement);

        //User Avatar
        let userCardAvatarElement = document.createElement('div');
        userCardAvatarElement.setAttribute('class','userCardAvatar');

        let userCardAvatarImgElement = document.createElement('img');
        userCardAvatarImgElement.setAttribute('alt','user avatar');
        userCardAvatarImgElement.setAttribute('src',user.imageSrc);

        userCardAvatarElement.append(userCardAvatarImgElement);

        //User Info
        let userCardInfoElement = document.createElement('div');
        userCardInfoElement.setAttribute('class','userCardInfo');

        let userInfoNameElement = document.createElement('h3');
        userInfoNameElement.innerText = user.name + ' ' + user.surname;

        userCardInfoElement.append(userInfoNameElement);

        //append all in card holder
        userCardsContainerElement.querySelector(`#user${user.id}`).append(userCardAvatarElement);
        userCardsContainerElement.querySelector(`#user${user.id}`).append(userCardInfoElement);
    }
}
loadUsersData();


const userCardsContainerElement = document.querySelector('.userCardsContainer');



















