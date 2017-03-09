var p1 = new Promise(executor);

p1.then(displayResponse)

function displayResponse(response){
    document.getElementById("p1").innerHTML = response.data;
}

function executor(resolve, reject){

    window.setTimeout(
        function (){
            resolve({datat: 'resolved', status:200});
        }, Math.random()* 2000 + 1000);

}
