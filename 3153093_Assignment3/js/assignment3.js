
var nsProducts = ["Turmeric Curcumin", "Joint Exercise", "Vegan D", "Vegan K", "Well Balanced Diet", "Muscle Soreness Bundle"]; // sample Products to start with
var proposedProduct;

//**************************Part 1 **************************/

  
function addProduct() {
    // This function is implmented for you
    // reads the value from the newProductId field, 
    let aProduct = document.getElementById("newProductId").value; 
    nsProducts[nsProducts.length] = aProduct; // and adds it at the end of the nsProducts array
    listProducts(); // calls listProducts() to reflect the new <li> on the page

    var ck =aProduct.split(" ");
    if(ck[0] === "Exercise"){
        document.getElementById("newProductId").value = "Exercise "+(nextCharacter());
    }
}

function listProducts() {
    let menu = document.getElementById('productsId');
    menu.innerHTML = '';
    for (let i = 0; i < nsProducts.length; i++) {
        addItemToList(nsProducts[i]);
    }
}

function addItemToList(new_item) {
    //You should implment this function
//function addItemToList() adds a new <li> with new_item to list it on the page
let menu = document.getElementById("productsId");
var newLI = document.createElement("LI");
menu.appendChild(newLI);
newLI.innerHTML = new_item;
}

function nextCharacter() {
    let text = document.getElementById("newProductId").value;
    if (Math.floor(text.charCodeAt(9)/90) >= 1){
        return String.fromCharCode((text.charCodeAt(9) % 90) + 65);
    }
    else{
        return String.fromCharCode((text.charCodeAt(9) % 90) + 1);
    }
}

//**************************Part 2 **************************/

function randomProduct() {
    //You should implement this function
// This function dsipays a random product from nsProducts array in the corresponding textbox.

var index = Math.floor(Math.random() * nsProducts.length);
rProduct = nsProducts[index].toUpperCase();

document.getElementById("randomProductId_txt").value = rProduct;
}

function encrypt() {
//You should implement this function
// function encrypt() iniitally gets the name of the randomely proposed product and encrypt it using 
// Caesar Cipher based on a rotation number entered by the used.

validateRandomPrductID();
validateNumRotation();
let plainText = document.getElementById("randomProductId_txt").value;
let roNumber = document.getElementById("num_rotations").value;
console.log(plainText);
console.log(roNumber);
let encodedText = '';
for(let i = 0; i < plainText.length; i++)
{
    encodedText += String.fromCharCode((plainText.charCodeAt(i) + parseInt(roNumber))%128);
}
document.getElementById("encr_txt_CC").value = encodedText;
}

function isEmpty(input){
    return input === null || input.match(/^ *$/);
}

function validateNumRotation(){
    let input = document.getElementById("num_rotations").value;
    if (isEmpty(input)){
        alert ("Error : Please enter a number of rotation");
    }
    if(input < 0 || input > 20 )
    {
        alert ("Error : The number must be between 0 - 20 ");
    }
}

function validateRandomPrductID(){
    let input = document.getElementById("randomProductId_txt").value;
    if (isEmpty(input)){
        alert ("Error : Please input the name of the product");
    }
    else
    {
        if (!input.match(/^([A-Z ])+$/)){
            alert ("Error : Name must contain only capital letters and spaces.");
        }
    }
}

function resetFunc(){
    //You should implement this function
    document.getElementById("Part2_forms").reset();
}


