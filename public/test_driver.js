var usr_fav = new Array();

function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.floor(Math.random() * 10)+1;
}



for(var i=0;i<6;i++){
	usr_fav[i] = getRandomInt();	
}

//console.log(usr_fav);
