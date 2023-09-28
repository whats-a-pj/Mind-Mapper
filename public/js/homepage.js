const profileroutes = async (event) => {
    event.preventDefault()

    const getMindMap = document.querySelector('#mind-map') // click into single MM *update based on handlebars
    const editMindMap = document.querySelector('#editMm') // edit display on the dashboard
    const newMindMap = document.querySelector('#newMM') // NEW MM
    const deleteMindMap = document.querySelector('#deleteMM') // delete

    if (getMindMap) {
        const newMMChoice = await fetch(`api/mindmaps`, {
            method: 'GET',
            body: JSON.stringify({ getMindMap }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(newMMChoice)
        if (newMMChoice.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('unable to load mindmaps')
        }
    }
    if (editMindMap) {
        const editMMChoice = await fetch(`api/mindmaps`, {
            method: 'PUT', 
            body: JSON.stringify({ editMindMap }),
        })
    }

};
document.querySelector('loginBtn').addEventListener('submit', profileroutes)

