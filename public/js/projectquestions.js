//unsure if i really need to target the form element or not so i commented them out for now.

//const projectTitleCheck = document.getElementById("#project-titleForm");
const titleTxtArea = document.getElementById('inputTitle');
const titleSubmit = document.getElementById('submitTitle');

titleSubmit.addEventListener('click', function () {

var userTitle = titleTxtArea.value;
console.log(userTitle);
fetch('/submitTitle', {
    method: 'POST',
    body: JSON.stringify({ input: userTitle }),
    headers: {
        'Content-Type': 'application/json'
        }
    })
//this is to go INTO dashboard
// console.log(userTitle);
});

//const userStoryCheck = document.getElementById("#userStoryForm");
const userStoryTxt = document.getElementById('inputCriteria');
const userStorySubmit = document.getElementById('submitCriteria');

userStorySubmit.addEventListener('click', function () {

var userStory = userStoryTxt.value;

fetch('/submitUserStory', {
    method: 'POST',
    body: JSON.stringify({ input: userStory }),
    headers: {
        'Content-Type': 'application/json'
        }
    })
});

//const wireFrameCheck = document.getElementById("#wireframeForm");
const wireFrameTxt = document.getElementById('inputWireframe');
const wireFrameSubmit = document.getElementById('submitWireframe');

wireFrameSubmit.addEventListener('click', function () {

var wireFrame = wireFrameTxt.value;

fetch('/submitWireframe', {
    method: 'POST',
    body: JSON.stringify({ input: wireFrame }),
    headers: {
        'Content-Type': 'application/json'
        }
    })
});

//const notesCheck = document.getElementById("#notesForm");
const notesTxt = document.getElementById('inputNotes');
const notesSubmit = document.getElementById('submitNotes');

notesSubmit.addEventListener('click', function () {

var notes = userStoryTxt.value;

fetch('/submitNotes', {
    method: 'POST',
    body: JSON.stringify({ input: notes }),
    headers: {
        'Content-Type': 'application/json'
        }
    })
});





/***********************************************************************/

// //checkbox event listeners
// userStoryCheck.addEventListener('change', (event) => {
//     if (event.currentTarget.checked) {
//         generateTextArea();
//     } else {

//     }
// });



// wireFrameCheck.addEventListener('change', (event) => {
//     if (event.currentTarget.checked) {
//         generateTextArea();
//     } else {

//     }
// });



//var checkBox = document.querySelectorAll("checkbox");
// for (var i = 0; i < checkBox.length; i++) {
//     checkBox[i].addEventListener("onchange", function() {
//       const formEl = document.createElement('form');
//       formEl.setAttribute("method", "POST");
//       formEl.setAttribute("action", "example.handlebars");
//       const textAreaEl = document.createElement('textarea');
//       textAreaEl.placeholder = 'Type your message here';
//       textAreaEl.rows = 4;
//       textAreaEl.cols = 50;
//       document.body.appendChild(textAreaEl);
//       const userInput = textAreaEl.value;

//     });
//   }