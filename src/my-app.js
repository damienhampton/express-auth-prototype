'use strict'
function publicStuff(){
  return createMessage('public content');
}
function secretCats(){
  return createMessage('lots of secret cats');
}
function secretCatsFromId(id){
  return createMessage(`one secret cat: ${id}`);
}

function createMessage(message){
  return { message }
}

module.exports = {
  publicStuff,
  secretCats,
  secretCatsFromId
}
  