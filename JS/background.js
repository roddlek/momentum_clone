const images = ['0.jpg', '1.jpg', '2.jpg'];
const chosenImgaes = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');
bgImage.src = `image/${chosenImgaes}`;
//document.body.appendChild(bgImage);
document.body.style = `background-image:url(${bgImage.src});
                       background-size:cover;
                       no-repeat;`;