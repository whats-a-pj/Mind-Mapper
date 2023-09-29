var projectTitleCheck = document.getElementById("#project-title");
var userStoryCheck = document.getElementById("#user-story-q");
var pkgCheck = document.getElementById("#pkgs-q");
var resourceCheck = document.getElementById("#resources-q");
var notesCheck = document.getElementById("#notes-q");
var wireFrameCheck = document.getElementById("#wireframe-q");
var codeSnippetCheck = document.getElementById("#code-snippet-q");

//checkbox event listeners
userStoryCheck.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        generateTextArea();
    } else {

    }
});

pkgCheck.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        generateTextArea();
    } else {

    }
});

resourceCheck.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        generateTextArea();
    } else {

    }
});

notesCheck.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        generateTextArea();
    } else {

    }
});

wireFrameCheck.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        generateTextArea();
    } else {

    }
});

codeSnippetCheck.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        generateTextArea();
    } else {

    }
});

//if checkbox is checked => this function will add an input field to the GUI
function generateTextArea() {
    //todo add checkBoxQuestions class to divs in projectquestions.handlebars
    const checkBoxQuestions = document.getElementsByClassName(/*'checkBoxQuestions'*/);
    const textAreaEl = document.createElement('textarea');
    const addBtn = document.createElement('button');
        addBtn.setAttribute('class', 'addBtn');
        textAreaEl.placeholder = 'Type your message here';
        textAreaEl.rows = 4;
        textAreaEl.cols = 50;
        //checkBoxQuestions.appendChild(textAreaEl);
        //document.body.appendChild(textAreaEl);
        //checkBoxQuestions.appendChild(addBtn);
        //document.body.appendChild(addBtn);
        //todo add ANOTHER eventListener for the addBtn to run this function again
    //const userInput = textAreaEl.value;
    //do something with user input here based on which checkbox is clicked??
    //
    // const newFormHandler = async (event) => {
    //     event.preventDefault();
      
    //     const name = document.querySelector('#project-name').value.trim();
    //     const needed_funding = document.querySelector('#project-funding').value.trim();
    //     const description = document.querySelector('#project-desc').value.trim();
      
    //     if (name && needed_funding && description) {
    //       const response = await fetch(`/api/projects`, {
    //         method: 'POST',
    //         body: JSON.stringify({ name, needed_funding, description }),
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       });
      
    //       if (response.ok) {
    //         document.location.replace('/profile');
    //       } else {
    //         alert('Failed to create project');
    //       }
    //     }
    //   };
    //
};

/***********************************************************************/

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