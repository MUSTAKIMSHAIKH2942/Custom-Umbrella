document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const customizer = document.querySelector('.customizer');
    const umbrellaImage = document.getElementById('umbrella-image');
    const logoImage = document.getElementById('logo-image');
    const loader = document.getElementById('loader');
    const logoUpload = document.getElementById('logo-upload');
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const uploadButton = document.querySelector('.upload-button');
    const uploadLabel = document.getElementById('upload-label');

    // Function to change background color dynamically
    function changeBackgroundColor(color, uploadColor) {
        container.style.backgroundColor = color;
        document.body.style.backgroundColor = color;
        customizer.style.backgroundColor = color;
        uploadButton.style.backgroundColor = uploadColor;
        loader.style.backgroundColor = uploadColor; // Set loader background color
    }

    // Event listener for color swatches
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const color = swatch.getAttribute('data-color');
            const uploadColor = swatch.getAttribute('data-upload-color');
            changeBackgroundColor(color, uploadColor); // Change background color dynamically
            switch (color) {
                case '#e0f7fa':
                    umbrellaImage.src = 'images/Blue umbrella.png';
                    break;
                case '#ffe6ff':
                    umbrellaImage.src = 'images/Pink umbrella.png';
                    break;
                case '#ffffcc':
                    umbrellaImage.src = 'images/Yellow umbrella.png';
                    break;
            }
        });
    });

    // Event listener for logo upload
    logoUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            umbrellaImage.style.display = 'none';
            logoImage.style.display = 'none'; // Hide the previous logo
            loader.style.display = 'block';
            uploadLabel.innerHTML = `<i class="fa-solid fa-arrow-up-from-bracket" id="Icons"></i> ${file.name}`;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                setTimeout(() => {
                    loader.style.display = 'none';
                    umbrellaImage.style.display = 'block';
                    logoImage.src = e.target.result;
                    logoImage.style.display = 'block';
                }, 2000); // Simulating processing delay
            };
            reader.readAsDataURL(file);
        } else {
            uploadLabel.innerHTML = `<i class="fa-solid fa-arrow-up-from-bracket" id="Icons"></i> UPLOAD LOGO`;
        }
    });
});
