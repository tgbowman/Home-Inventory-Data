const xboxOne = {
    "name": "Xbox One",
    "type": "Electronics",
    "location": "Office",
    "description": "My xbox that I do all my gaming on."
};

const wolfStatue = {
    "name": "Wolf Statue",
    "tyle": "decor",
    "location": "Office",
    "description": "My wolf statue that I got as a gag gift.  It reminds me of the Starks on GoT",
}

const keurig = {
    "name": "Keurig",
    "tyle": "appliance",
    "location": "Kitchen",
    "description": "My Keurig.  I could not survive without its life-giving coffee!"
}

const foxLamp = {
    "name": "Fox Lamp",
    "tyle": "decor",
    "location": "Bedroom",
    "description": "My lamp that is in the shape of a fox."
}

const macbook = {
    "name": "MacBook Pro",
    "tyle": "electonics",
    "location": "Office",
    "description": "My macbook where I do all my work."
}

const coffeeMug = {
    "name": "Star Wars Coffee Thermos",
    "tyle": "container",
    "location": "kitchen",
    "description": "My Star Wars coffee mug that I use for my coffee everyday."
}

const muleMug = {
    "name": "Copper Moscow Mule Mug",
    "tyle": "container",
    "location": "kitchen",
    "description": "My copper Moscow Mule mug that I drink all my mules from."
}

const wowAccount = {
    "name": "World of Warcraft Account",
    "tyle": "electronics",
    "location": "office",
    "description": "My WoW account that I have had since I was a junior in high school."
}

const deerCandle = {
    "name": "Deer Candle Holder",
    "tyle": "decor",
    "location": "Office",
    "description": "My deer candle holder that was my grandmothers."
}

const globe = {
    "name": "Cold War globe",
    "tyle": "decor",
    "location": "office",
    "description": "My grandfathers globe from the Cold War."
}

let decor = [];
let electronics = [];
let container = [];
let appliance = [];

decor.push(deerCandle, foxLamp, globe, wolfStatue);
electronics.push(wowAccount, macbook, xboxOne);
container.push(muleMug, coffeeMug);
appliance.push(keurig);

let HomeInventory = {
    "decor": decor,
    "electronics": electronics,
    "container": container,
    "appliance": appliance
}

const homeInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)

const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))