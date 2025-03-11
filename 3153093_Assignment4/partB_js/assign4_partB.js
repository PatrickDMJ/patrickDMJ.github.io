var stickyEl;

window.onload = function () {
    var del_button = document.getElementById("del_button");
    del_button.addEventListener('click', clearStickies);

    var button = document.getElementById("add_button");
    button.addEventListener('click', createSticky);

    stickyEl = document.getElementById('stickies');

    var stickiesArray = getStickiesArray();

    for (var i = 0; i < stickiesArray.length; i++) {
        var obj = JSON.parse(stickiesArray[i]);
        addStickyToDOM(obj);
    }
};

function createSticky() {
  
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      
            var data = JSON.parse(xhr.responseText);
            clearStickies();
            for (var i = 0; i < data.length; i++) {
                addStickyToDOM(data[i]);
            }
        
    };
    xhr.open("GET", "partB_json/programmingLanguagesStory.json");
    xhr.send();
}

function addStickyToDOM(obj) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    sticky.style.backgroundColor = getRandomColor();

    var span = document.createElement("span");
    span.classList.add("sticky");
    span.innerHTML = obj.name + " (" + obj.year + ")<br> " + obj.contribution + ".<br> <br>";
    sticky.appendChild(span);
    sticky.addEventListener('click', function () {
        localStorage.removeItem(obj.stickyId);
        sticky.parentNode.removeChild(sticky);
    });
    stickies.appendChild(sticky);
}

function getStickiesArray() {
    var stickiesArray = [];
    for (var x = 0; x < localStorage.length; x++) {
        var key = localStorage.key(x);
        if (key.indexOf('sticky') !== -1) {
            stickiesArray.push(localStorage[key]);
        }
    }
    return stickiesArray;
}

function clearStickies() {
    var stickies = document.getElementById("stickies");
    stickies.innerHTML = "";
}

function getRandomColor() {
    var letters = 'ABCDEF0123456789';
    var color = '#';
    
    var i = 6;
    while (i > 0) {
        color += letters[Math.floor(Math.random() * 16)];
        i--;
    }
    return color;
}