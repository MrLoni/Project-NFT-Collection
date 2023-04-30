/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

console.log('Special Agents NFTs\n')

function mintNFT (_codeName, _eyeColor, _hatType, _shirtType, _hairColor) {
    const NFT = {
        "codename": _codeName,
        "eyeColor": _eyeColor,
        "hatType": _hatType,
        "shirtType": _shirtType,
        "hairColor": _hairColor
    }
    NFTs.push(NFT);
    console.log("Minted: " + _codeName);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t" + (i + 1));
    console.log("Codename: \t" + NFTs[i].codename)
    console.log("Eye Color: \t" + NFTs[i].eyeColor)
    console.log("Hat Type: \t" + NFTs[i].hatType)
    console.log("Shirt Type: " + NFTs[i].shirtType)
    console.log("Hair Color: " + NFTs[i].hairColor)
}  
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Urban", "Brown", "Cap", "Jacket", "Ginger");
mintNFT("Rider", "Blue", "Motorcycle Helmet", "Leather Jacket", "Brown");
mintNFT("Detective", "Green", "Fedora", "Trench Coat", "Blond");
mintNFT("Ranger", "Black", "Cowboy Hat", "Duster", "Black");
mintNFT("Hunter", "Amber", "Tail Cap", "Parka", "White");
listNFTs();
getTotalSupply();
