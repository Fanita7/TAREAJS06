const IMAGE_URL = "https://placehold.co/250";
const BODY = document.getElementsByTagName("body")[0]; 
const CARD_CONTAINER = document.getElementById("container"); 


const fetchUserData =  () => {

    return [
        {
        id: 1,
        user_name: "User Name",
        description: "Lorem Ipsum",
        age: 25,
        fav_music: { 
            bands: [ 
                "acdc",
                "gunsnroses",
                "nirvana",
                "candlebox" ,
                "duranduran",
                ],
            
            },
        },
        {
            id: 1,
            user_name: 'User1',
            description: 'lorem ipsum',
            age: '46',
            fav_music: {
                bands: [
                    'Band 1', 
                    'Band 2', 
                    'Band 3', 
                    'Band 4',
                    'Band 5'
                ]
            }
        },
        {
            id: 2,
            user_name: 'User LastName',
            description: 'Lorem lorem lorem',
            age: '23',
            fav_music: {
                bands: [
                   'Band 1', 
                   'Band 2', 
                   'Band 3', 
                   'Band 4'
                ]
            }
        },
    ] 
};



function createCardElements() {
    return {
        image: document.createElement("img"),
        userName: document.createElement("h3"),
        description: document.createElement("div"),
        age: document.createElement("div"),
        bands: document.createElement("ul"),
        CARD: document.createElement("div")
    };
}


function populateCards(USERDATA) {
    
    USERDATA.forEach(user => {
        
        const { image, userName, description, age, bands, CARD } = createCardElements();

        
        const IMG_CONTAINER = document.createElement("div");
        IMG_CONTAINER.classList.add("img-container"); 

        
        image.src = IMAGE_URL;
        image.alt = "Placeholder user photo";

      
        const CARD_CHILD = document.createElement("div");
        CARD_CHILD.classList.add("card-content"); 

        CARD.classList.add("card-container");

        userName.textContent = user.user_name;
        description.textContent = user.description;
        age.textContent = user.age;

        
        const bandList = user.fav_music.bands.map(e => {
            const item = document.createElement("li");
            item.textContent = e;
            return item;
        });

        
        bands.append(...bandList);

        
        IMG_CONTAINER.appendChild(image); 
        CARD_CHILD.append(userName, description, age, bands); 
        CARD.appendChild(IMG_CONTAINER); 
        CARD.appendChild(CARD_CHILD); 

       
        CARD_CONTAINER.appendChild(CARD);
    });

    
    BODY.appendChild(CARD_CONTAINER);
}



const USERDATA = fetchUserData();
console.log(USERDATA); 
console.log(USERDATA.length); 

populateCards(USERDATA);


