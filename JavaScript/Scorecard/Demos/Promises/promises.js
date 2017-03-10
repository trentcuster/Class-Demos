var characterService= {
    getCharacters: getCharacters
}

function getCharacters(){
    var characters = [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "http://swapi.co/api/planets/1/",
            "films": [
                "http://swapi.co/api/films/6/",
                "http://swapi.co/api/films/3/",
                "http://swapi.co/api/films/2/",
                "http://swapi.co/api/films/1/",
                "http://swapi.co/api/films/7/"
            ],
            "species": [
                "http://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "http://swapi.co/api/vehicles/14/",
                "http://swapi.co/api/vehicles/30/"
            ],
            "starships": [
                "http://swapi.co/api/starships/12/",
                "http://swapi.co/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.co/api/people/1/",
            "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/luke-skywalker-sm.jpeg",
            "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/luke-skywalker-lg.jpeg"
        },
        {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            "homeworld": "http://swapi.co/api/planets/1/",
            "films": [
                "http://swapi.co/api/films/5/",
                "http://swapi.co/api/films/4/",
                "http://swapi.co/api/films/6/",
                "http://swapi.co/api/films/3/",
                "http://swapi.co/api/films/2/",
                "http://swapi.co/api/films/1/"
            ],
            "species": [
                "http://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:10:51.357000Z",
            "edited": "2014-12-20T21:17:50.309000Z",
            "url": "http://swapi.co/api/people/2/",
            "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/c-3po-lg.jpeg",
            "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/c-3po-sm.jpeg"
        },
        {
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a",
            "homeworld": "http://swapi.co/api/planets/8/",
            "films": [
                "http://swapi.co/api/films/5/",
                "http://swapi.co/api/films/4/",
                "http://swapi.co/api/films/6/",
                "http://swapi.co/api/films/3/",
                "http://swapi.co/api/films/2/",
                "http://swapi.co/api/films/1/",
                "http://swapi.co/api/films/7/"
            ],
            "species": [
                "http://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:11:50.376000Z",
            "edited": "2014-12-20T21:17:50.311000Z",
            "url": "http://swapi.co/api/people/3/",
            "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/r2-d2-sm.jpeg",
            "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/r2-d2-lg.jpeg"
        },
        {
            "name": "Darth Vader",
            "height": "202",
            "mass": "136",
            "hair_color": "none",
            "skin_color": "white",
            "eye_color": "yellow",
            "birth_year": "41.9BBY",
            "gender": "male",
            "homeworld": "http://swapi.co/api/planets/1/",
            "films": [
                "http://swapi.co/api/films/6/",
                "http://swapi.co/api/films/3/",
                "http://swapi.co/api/films/2/",
                "http://swapi.co/api/films/1/"
            ],
            "species": [
                "http://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "http://swapi.co/api/starships/13/"
            ],
            "created": "2014-12-10T15:18:20.704000Z",
            "edited": "2014-12-20T21:17:50.313000Z",
            "url": "http://swapi.co/api/people/4/",
            "avatar": "https://s3-us-west-2.amazonaws.com/star-wars-characters/darth-vader-sm.jpeg",
            "img": "https://s3-us-west-2.amazonaws.com/star-wars-characters/darth-vader-lg.jpeg"
        }

    ]
    return new Promise(executor);

    function executor(resolve, reject){
        setTimeout(function(){
            resolve({characters: characters});
        }, Math.random()*200+1000);
    }


}

