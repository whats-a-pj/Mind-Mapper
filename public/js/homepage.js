const profileroutes = async (event) => {
    event.preventDefault()

    const getMindMap = document.querySelector('#mind-map') // click into single MM *update based on handlebars
    const editMindMap = document.querySelector('#editMm') // edit display on the dashboard
    const newMindMap = document.querySelector('#newMM') // NEW MM
    const deleteMindMap = document.querySelector('#deleteMM') // delete
    const mmlist = document.querySelectorAll('li') //use to post existing MM's
    const accpCrit = document.querySelector('#accpCrit')
    const title = document.querySelector('#title')
    const wireFrame = document.querySelector('wireFrame')
    const notes = document.querySelector('#notes')
// consts to pull the mm seed info and push to html pending.


    

    if (getMindMap) {

        const newMMChoice = await fetch(`api/mindmap`, {
            method: 'GET',
            body: JSON.stringify({ mmlist }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (newMMChoice.ok) {
            document.location.replace('/mindmap')
        } else {
            alert('unable to load mindmaps')
        }
    }
    if (editMindMap) {
        const editMMChoice = await fetch(`api/mindmaps`, {
            method: 'GET', 
            body: JSON.stringify({ editMindMap }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (editMMChoice.ok) {
            document.location.replace('/projectquestions')
        } else {
            alert('unable to load mindmaps')
        }
    }
    if (newMindMap) {
        const newMindMapChoice = await fetch(`api/mindmaps`, {
            method: 'GET',
            body: JSON.stringify({ newMindMapChoice }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
      
        if (newMindMapChoice.ok) {
            document.location.replace('/projectquestions')
        } else {
            alert('unable to load mindmaps')
        }
    }
    if (deleteMindMap) {
        const deleteMindMapChoice = await fetch(`api/mindmaps`, {
            method: 'GET',
            body: JSON.stringify({ deleteMindMapChoice }),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (deleteMindMapChoice.ok) {
            document.location.replace('/mindmap')
        } else {
            alert('unable to load mindmaps')
        }
    }

};

document.querySelector('loginBtn').addEventListener('submit', profileroutes)

