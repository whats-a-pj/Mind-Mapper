//do we need to require projectquestions.handlebars so it targets THOSE specific checkboxes?
var checkBox = document.querySelectorAll("checkbox");

for (var i = 0; i < checkBox.length; i++) {
  checkBox[i].addEventListener("onchange", function() {
    const textArea = document.createElement('textarea');
    textArea.name = 'Type your message here';
    textArea.rows = 4;
    textArea.cols = 50;
    document.body.appendChild(textArea);
    const userInput = textArea.value;
    //do we need a route here to add this to the db or do we need 
    //to create an event listener for each checkbox so that the inputs
    //direct themselves to the right pages?
  });
}



/***********************************************************************/

//big ole if statement?
// async function userStoryCheck () {
// try {

// }};


// document.querySelector("#user-story-q").addEventListener('checkbox', /*function*/)

// document.querySelector("#pkgs-q").addEventListener('checkbox', /*function*/)

// document.querySelector("#resources-q").addEventListener('checkbox', /*function*/)

// document.querySelector("#notes-q").addEventListener('checkbox', /*function*/)

// document.querySelector("#wireframe-q").addEventListener('checkbox', /*function*/)

// document.querySelector("#code-snippet-q").addEventListener('checkbox', /*function*/)

// function generatePassword() {
//     var length = +lengthEl.value;
//     var hasLower = lowercaseEl.checked;
//     var hasUpper = uppercaseEl.checked;
//     var hasNumber = numbersEl.checked;
//     var hasSymbol = symbolsEl.checked;
//     //function to pull  pass deets and compare to whether the checkbox is used
//     let generatedPassword = '';
//   const typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
//   if (typesCount === 0) {
//     return '';
//   }
//     const passdeetsArray = [
//         hasLower && passDeets.lowerCase,
//         hasUpper && passDeets.upperCase,
//         hasNumber && passDeets.numbers,
//         hasSymbol && passDeets.symbols
//     ].filter(Boolean);