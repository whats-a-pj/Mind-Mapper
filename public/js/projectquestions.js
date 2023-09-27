//do we need to require projectquestions.handlebars so it targets THOSE specific checkboxes?
//todo we need to move the id's for these from the divs to the actual checkbox inputs- my bad lol
var userStoryCheck = document.getElementById("#user-story-q");
var pkgCheck = document.getElementById("#pkgs-q");
var resourceCheck = document.getElementById("#resources-q");
var notesCheck = document.getElementById("#notes-q");
var wireFrameCheck = document.getElementById("#wireframe-q");
var codeSnippetCheck = document.getElementById("#code-snippet-q");



if (userStoryCheck.checked) {
    function generateUserStory() {
    const formEl = document.createElement('form');
        formEl.setAttribute("method", "POST");
        formEl.setAttribute("action", /* "userstory.handlebars" */);
    const textAreaEl = document.createElement('textarea');
        textAreaEl.name = 'Type your message here';
        textAreaEl.rows = 4;
        textAreaEl.cols = 50;
        document.body.appendChild(textAreaEl);
    const userInput = textAreaEl.value;

}} //else if ()



/***********************************************************************/

//big ole if statement?
// async function userStoryCheck () {
// try {

// }};

//var checkBox = document.querySelectorAll("checkbox");
// for (var i = 0; i < checkBox.length; i++) {
//     checkBox[i].addEventListener("onchange", function() {
//       const formEl = document.createElement('form');
//       formEl.setAttribute("method", "POST");
//       formEl.setAttribute("action", "example.handlebars");
//       const textAreaEl = document.createElement('textarea');
//       textAreaEl.name = 'Type your message here';
//       textAreaEl.rows = 4;
//       textAreaEl.cols = 50;
//       document.body.appendChild(textAreaEl);
//       const userInput = textAreaEl.value;

//     });
//   }

// document.getElementById("#user-story-q").addEventListener('checkbox', /*function*/)

// document.getElementById("#pkgs-q").addEventListener('checkbox', /*function*/)

// document.getElementById("#resources-q").addEventListener('checkbox', /*function*/)

// document.getElementById("#notes-q").addEventListener('checkbox', /*function*/)

// document.getElementById("#wireframe-q").addEventListener('checkbox', /*function*/)

// document.getElementById("#code-snippet-q").addEventListener('checkbox', /*function*/)

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