let userName = prompt('Your name');
let age = prompt(userName+ "! plaease enter your current age:", "");
let recommend = document.querySelector(".club__recom");
 if(parseInt(age)>=18){
        recommend.textContent ="Dear " + userName + "! it is allowed to you to enter our night club";
    } else {
    recommend.textContent = "Dear " + userName + "! it is not allowed to you to enter our night club";
    }


 