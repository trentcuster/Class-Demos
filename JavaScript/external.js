var loadedDiv = document.getElementById("loaded");
loadedDiv.style.cursor="pointer";
loadedDiv.onclick = function(){
    loadedDiv.innerText = "Just changed it to red";
    loadedDiv.style.color = "red";
};
