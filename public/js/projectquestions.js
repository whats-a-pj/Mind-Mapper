const mindMapForm = document.getElementById('mindMapForm');
const titleTxtArea = document.getElementById('inputTitle');
const userStoryTxt = document.getElementById('inputCriteria');
const wireFrameTxt = document.getElementById('inputWireframe');
const notesTxt = document.getElementById('inputNotes');
const dashboardRedirect = document.getElementById('finishBtn');

//Finish button- redirects to dashboard
// document.addEventListener('DOMContentLoaded', function() {
    dashboardRedirect.addEventListener('click', function() {
//Name of project
// titleTxtArea.addEventListener('click', function () {

var userTitle = titleTxtArea.value;
var userStory = userStoryTxt.value;
var wireFrame = wireFrameTxt.value;
var notes = notesTxt.value;

fetch('/submitTitle', {
    method: 'POST',
    body: JSON.stringify({ title: userTitle, acceptance_criteria: userStory, wireframe_link: wireFrame, note: notes }),
    headers: {
        'Content-Type': 'application/json'
        }
    }).then(function() {document.location.replace('/dashboard');
        });
    });