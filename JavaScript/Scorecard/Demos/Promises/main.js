var characterListElement = document.getElementById('characters');

var characterPromise = characterService.getCharacters();

characterPromise.then(function (data) {
    var firstCharacter = data.characters[0];
    var listItem = '<li><img src = " '+firstCharacter.avatar+' " />' + firstCharacter.name + '</li>'
    characterListElement.innerHTML= listItem;
});
