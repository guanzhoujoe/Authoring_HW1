
// JavaScript Document
(function() {
var theImages = document.querySelectorAll('.image-holder'),
theHeading = document.querySelector('.heading'),
theSubhead = document.querySelector('.main-copy h2'),
theSeasonText = document.querySelector('.main-copy p'),
appliedClass;

function changeElements() {
//make sure event handling is working
//debugger;
let objectIndex =dynamicContent[this.id];
//grab the object that corresponds to the id of the element clicked on
let subImages = document.querySelector('.subImagesContainer');


// remove all subImages
while (subImages.firstchild) {
  subImages.removeChild(subImages.firstChild);

}
// add some images at the bottom of the page
objectIndex.images.forEach(function(image, index){
  let newSubImg = document.createElement('img');
  //add a css class to it
  newSubImg.classList.add('thumb');
  //add a source
  newSubImg.src = "images/" + objectIndex.images[index];
  //add it tot he page
  subImages.appendChild(newSubImg);
});

//change the color of the text elemetns
//remove the last css class applied
theSubhead.classList.remove(appliedClass);
theHeading.classList.remove(appliedClass);

theSubhead.classList.add(this.id);
theHeading.classList.add(this.id);


//change the content ont th page;
//firstchild  .nodevalue is the same as innerohtml
theSubhead.firstChild.nodeValue = objectIndex.headline;
theSeasonText.firstChild.nodeValue = objectIndex.text;

console.log(this.id);

appliedClass = this.id;
}

theImages.forEach(function(element, index) {
// loop through the images and add event handling to each one
element.addEventListener('click', changeElements, false);
});
//theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
//theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
//theHeading.classList.add('spring');

//document.querySelector('#spring').click();

//more program type way to do the same thing

changeElements.call(document.querySelector("#spring"));
})();
