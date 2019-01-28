var rottenTomatoes =
    [
    {
    name: "The Godfather",
    year: 1972,
    genre: "Drama",
    cast: [
        {
        dontVitoCorleone: "Marlon Brando", 
        michaelCorleone: "Al Pacino",
        sonnyCorleone: "James Caan",
        clemenza: "Richard S. Castellano",
        }
    ],
    director: "Francis Ford Coppola",
    screenplay: "Francis Ford Coppola",
    tomatoMeter: [
        {
        critics: "98%",
        audience: "98%",
        }
    ],
    imbdPopularity: 151,
    oscarWins: 3,
},
{
    name: "Citizen Kane",
    year: 1941,
    genre: "Drama",
    cast: [
        {
        josephCotten: "Jebediah Leland",
        dorothyCominore: 'Susan Alexander Kane',
        agnesMoorehead: "Mary Kane",
        ruthWarwick: "Emily Monroe Norton Kane"
        }
    ],
    director: "Orson Welles",
    screenplay: "Herman J. Mankiewicz",
    tomatoMeter: [
        {
            critics: "96%",
            audience: "97%",
        }
    ],
    imbdPopularity: 1371,
    oscarWins: 1,
}
]

function getRating() {
   for(i=0; i<rottenTomatoes.length; i++) {
    var rating = rottenTomatoes[i].tomatoMeter[0]   
    var names = rottenTomatoes[i].name
    console.log("The critics said " + names + " got a " + rating.critics + " rating, while the audience gave it a "+ rating.audience)
   }
}
getRating()