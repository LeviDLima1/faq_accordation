const dropBnt = document.getElementById("dropBnt");
const dropBnt2 = document.getElementById("dropBnt2");
const dropBnt3 = document.getElementById("dropBnt3");
const dropBnt4 = document.getElementById("dropBnt4");

const hiddenText = document.getElementById("hiddenText");
const hiddenText2 = document.getElementById("hiddenText2");
const hiddenText3 = document.getElementById("hiddenText3");
const hiddenText4 = document.getElementById("hiddenText4");

const changeImage = document.getElementById("changeImage")
const changeImage2 = document.getElementById("changeImage2")
const changeImage3 = document.getElementById("changeImage3")
const changeImage4 = document.getElementById("changeImage4")

const bntImage = document.getElementById("bntImage")
const bntImage2 = document.getElementById("bntImage2")
const bntImage3 = document.getElementById("bntImage3")
const bntImage4 = document.getElementById("bntImage4")

const minusBnt = document.getElementById("minusBnt")
const menu = document.getElementById("container")



dropBnt.addEventListener('click', function () {

    if (hiddenText.style.display === 'flex') {
        hiddenText.style.display = 'none';
        changeImage.style.display = 'flex';



        bntImage.innerHTML = `
                        <img src="src/assets/icon-plus.svg"
                            alt=""
                            id="minusBnt"
                            class="w-8">
                            `;
    } else {
        hiddenText.style.display = 'flex';
        changeImage.style.display = 'none';
        bntImage.innerHTML = `
                        <img src="src/assets/icon-minus.svg"
                            alt=""
                            
                            class="w-8 ">
                            `;
    }
});

dropBnt2.addEventListener('click', function () {

    if (hiddenText2.style.display === 'flex') {
        hiddenText2.style.display = 'none';
        changeImage2.style.display = 'flex';



        bntImage2.innerHTML = `
                        <img src="src/assets/icon-plus.svg"
                            alt=""
                            id="minusBnt"
                            class="w-8">
                            `;
    } else {
        hiddenText2.style.display = 'flex';
        changeImage2.style.display = 'none';
        bntImage2.innerHTML = `
                        <img src="src/assets/icon-minus.svg"
                            alt=""
                            
                            class="w-8 ">
                            `;
    }
});

dropBnt3.addEventListener('click', function () {

    if (hiddenText3.style.display === 'flex') {
        hiddenText3.style.display = 'none';
        changeImage3.style.display = 'flex';



        bntImage3.innerHTML = `
                        <img src="src/assets/icon-plus.svg"
                            alt=""
                            id="minusBnt"
                            class="w-8">
                            `;
    } else {
        hiddenText3.style.display = 'flex';
        changeImage3.style.display = 'none';
        bntImage3.innerHTML = `
                        <img src="src/assets/icon-minus.svg"
                            alt=""
                            
                            class="w-8 ">
                            `;
    }
});

dropBnt4.addEventListener('click', function () {

    if (hiddenText4.style.display === 'flex') {
        hiddenText4.style.display = 'none';
        changeImage4.style.display = 'flex';



        bntImage4.innerHTML = `
                        <img src="src/assets/icon-plus.svg"
                            alt=""
                            id="minusBnt"
                            class="w-8">
                            `;
    } else {
        hiddenText4.style.display = 'flex';
        changeImage4.style.display = 'none';
        bntImage4.innerHTML = `
                        <img src="src/assets/icon-minus.svg"
                            alt=""
                            
                            class="w-8 ">
                            `;
    }
});






