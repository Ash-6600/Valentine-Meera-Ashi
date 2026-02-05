// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'Front_page.jpeg'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

function goToValentine() {
    window.location.href = "yes.html";
}


// Display the cat.gif initially
displayCat();


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};



document.addEventListener("DOMContentLoaded", function () {

    const letterModal = document.getElementById("letterModal");
    const letterContent = document.getElementById("letterContent");
    const closeBtn = document.querySelector(".close");

    window.openLetter = function(gift) {
        letterModal.style.display = "flex";

        if (gift === "gift1") {
            letterContent.innerHTML = `
                Meri jaana ❤️<br><br>
                You will receive your gift by 08 Feb most probably.
                Those I picked after giving some thoughts, so please don't mind to return if you disliked it.
            `;
        }

        if (gift === "gift2") {
            letterContent.innerHTML = `
                Sorry 😓<br><br>
                This I need to start planning 😅
            `;
        }

        if (gift === "gift3") {
            letterContent.innerHTML = `
                A letter from my heart, soul, and brain 💌<br><br>
                Tbh meera I am typing this at midnight so don't mind my thoughts.
                When I told you I was working on a project, this was it.
                You told me about this asking for valentine (which I really don't know before) then I thought okay yeah I should also do something.
                Then again I wanted to do something different from others, I told you that I will make feel different.
                I saw this idea of website in insta tbh, from there I thought okay let's build this, so I started and wanted to give this a different touch.
                I thought along with asking for valentine, I can also make it a gallery, so here we are.
                I love you so much meera and this is fuel of your love only which runs this machine.
                Meera.
            `;
        }
    };

    closeBtn.onclick = () => {
        letterModal.style.display = "none";
    };

    window.onclick = (e) => {
        if (e.target === letterModal) {
            letterModal.style.display = "none";
        }
    };

});
