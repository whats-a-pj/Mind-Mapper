
/***********************************************/
//sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarContent = document.getElementById('sidebar-content');

sidebar.addEventListener('click', function() {
    console.log('test')
    sidebarContent.classList.toggle('sidebar');
});
});

/***********************************************/
//new project- project questions page
document.addEventListener('DOMContentLoaded', function() {
    const newProject = document.getElementById('addNew');

newProject.addEventListener('click', function() {
        document.location.replace('/projectquestions');
})
});

/***********************************************/
//todo SAVED PROJECTS eventlisteners??

/*********************************************/
//todo eventlisteners for circles 1, 2, 3.
//add hide class to each circle's content hidden divs and remove attribute on click?? like we did above with the toggle method
document.addEventListener('DOMContentLoaded', function() {
    const criteriaCircle = document.getElementById('userstorycircle');

criteriaCircle.addEventListener('click', function() {
    const criteriaHidden = document.getElementById('usercriteria');
    criteriaHidden.removeAttribute('hide');
})
});

/*********************************************/
// const dashboardRo = async (event) => {
//     event.preventDefault()

//     const POSTMindMap = document.querySelector('#mind-map') // click into single MM *update based on handlebars
//     const editMindMap = document.querySelector('#editMm') // edit display on the dashboard
//     const newMindMap = document.querySelector('#newMM') // NEW MM
//     const deleteMindMap = document.querySelector('#deleteMM') // delete
//     const mmlist = document.querySelectorAll('li') 
//     const title = document.querySelector('title')


//     // function sidebarToggler() {

//     //     const mmlist = document.querySelectorAll('li') 
//     //     if (title) {
//     //         let selectMM =  fetch(`api/mindmap/title`, {
//     //             method: 'POST', 
//     //             body: json.parse(title, mmlist), 
//     //             headers: {
//     //                 'content-type': "application/json"
//     //             }
//     //         })
//     //         if (selectMM.ok) {
//     //             String.prototype.replace('/dashboard')
//     //         } else {
//     //             console.error(err)
//     //             alert('error loading')
//     //         }
//     //     }
//     // }

//     if (mmlist && title) {

//         const newMMChoice = await fetch(`api/mindmap/title`, {
//             method: 'POST',
//             body: JSON.stringify(mmlist, title ),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })
//         if (newMMChoice.ok) {
//             document.location.replace('/dashboard')
//         } else {
//             alert('unable to load mindmaps')
//         }
//     }
//     if (editMindMap) {
//         const editMMChoice = await fetch(`api/mindmaps`, {
//             method: 'POST', 
//             body: JSON.stringify({ editMindMap }),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })
//         if (editMMChoice.ok) {
//             document.location.replace('/projectquestions')
//         } else {
//             alert('unable to load mindmaps')
//         }
//     }
//     if (newMindMap) {
//         const newMindMapChoice = await fetch(`api/mindmaps`, {
//             method: 'POST',
//             body: JSON.stringify({ newMindMapChoice }),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })
      
//         if (newMindMapChoice.ok) {
//             document.location.replace('/projectquestions')
//         } else {
//             alert('unable to load mindmaps')
//         }
//     }
//     if (deleteMindMap) {
//         const deleteMindMapChoice = await fetch(`api/mindmaps`, {
//             method: 'POST',
//             body: JSON.stringify({ deleteMindMapChoice }),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })

//         if (deleteMindMapChoice.ok) {
//             document.location.replace('/mindmap')
//         } else {
//             alert('unable to load mindmaps')
//         }
//     }

// // querySelector('#sidebar').addEventListener('click', sidebarToggler)
// };

// addEventListener('click', dashboardRo)



