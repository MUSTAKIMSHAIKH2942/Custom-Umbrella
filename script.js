function changeColor(color) {
    // Hide the loaders when color change starts
    document.getElementById('upload-loader-Button').style.display = 'none';
    document.getElementById('upload-loader').style.display = 'none';
    document.getElementById('upload-button').style.display = 'block';

    const svgLoader = document.getElementById('upload-loader');
    const svgPath = svgLoader.querySelector('path');
    svgPath.setAttribute('fill', color);

    const svgLoaderButton = document.getElementById('upload-loader-Button');
    const svgbuttonPath = svgLoaderButton.querySelector('path');
    svgbuttonPath.setAttribute('fill', '#f1f1f6');

    const umbrellaImage = document.getElementById('umbrella-image');
    umbrellaImage.src = `images/${color.charAt(0).toUpperCase() + color.slice(1)}_umbrella.png`;

    document.body.classList.remove('blue-background', 'pink-background', 'yellow-background');
    document.body.classList.add(`${color}-background`);

    var Buttoncolor = document.getElementById("upload-button");

    if (color === 'blue') {
        Buttoncolor.style.backgroundColor = "#66b3ff";
    } else if (color === 'pink') {
        Buttoncolor.style.backgroundColor = "#ff80d5";
    } else {
        Buttoncolor.style.backgroundColor = "#e6e600";
    }

    showLoader(); // Show the loader when color change starts

    setTimeout(() => {
        hideLoader(); // Hide the loader when color change finishes
    }, 3000); // Adjust this timeout value as needed
}

function previewLogo(event) {
const input = event.target;
const file = input.files[0];

// Check if the file size exceeds 5 MB
const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
if (file.size > maxSize) {
alert('File size exceeds 5 MB. Please upload a smaller file.');
return;
}

const fileName = file.name;
const uploadButton = document.getElementById('upload-loader-Button');
const buttonUpload = document.getElementById('upload-button');
if (uploadButton) {
uploadButton.style.display = 'block'; // Hide the image of the upload button
uploadButton.innerText = ''; // Clear any existing text
}

showLoader(); // Show the loader

// Simulate loader delay for 3 seconds
setTimeout(function () {
if (buttonUpload) {
    buttonUpload.innerText = fileName; // Display the file name inside the button
}
hideLoader(); // Hide the loader after 3 seconds

// Display the uploaded image
if (input.files && file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const uploadedLogo = document.getElementById('uploaded-logo');
        if (uploadedLogo) {
            uploadedLogo.src = e.target.result;
            uploadedLogo.style.display = 'block';
            // Set max-width and max-height properties to fix the size of the uploaded image
            uploadedLogo.style.maxWidth = '80px'; // Adjust the value as needed
            uploadedLogo.style.maxHeight = '80px'; // Adjust the value as needed
        }
    };
    reader.readAsDataURL(file);
}
}, 3000);
}


// Function to show the loader
function showLoader() {
    const uploadLoader = document.getElementById('upload-loader');
    const uploadLoaderButton = document.getElementById('upload-loader-Button');
    const umbrellaImage = document.getElementById('umbrella-image');
    const uploadedLogo = document.getElementById('uploaded-logo');
    const icons = document.getElementById('Icons');
    // const icons = document.getElementById('Icons');
    // icons.style.display = 'block';
    if (uploadLoader) {
        uploadLoader.style.display = 'block';
    }
    if (uploadLoaderButton) {
        uploadLoaderButton.style.display = 'block';
    }
    if (umbrellaImage) {
        umbrellaImage.style.display = 'none';
    }
    if (uploadedLogo) {
        uploadedLogo.style.display = 'none';
    }
    if (icons) {
        icons.style.display = 'none';
    }
}

// Function to hide the loader
function hideLoader() {
    const uploadLoader = document.getElementById('upload-loader');
    const uploadLoaderButton = document.getElementById('upload-loader-Button');
    const umbrellaImage = document.getElementById('umbrella-image');
    const uploadedLogo = document.getElementById('uploaded-logo');
    const icons = document.getElementById('Icons');
    // icons.style.display = 'block';

    if (uploadLoader) {
        uploadLoader.style.display = 'none';
    }
    if (uploadLoaderButton) {
        uploadLoaderButton.style.display = 'none';
    }
    if (umbrellaImage) {
        umbrellaImage.style.display = 'block';
    }
    if (uploadedLogo) {
        uploadedLogo.style.display = 'block';
    }
    if (icons) {
        icons.style.display = 'inline';
    }
}

// Add an event listener to ensure the file stays uploaded if the color changes
document.getElementById('upload-button').addEventListener('click', function () {
    const uploadedLogo = document.getElementById('uploaded-logo');
    if (uploadedLogo && uploadedLogo.src) {
        uploadedLogo.style.display = 'block';
    }
});