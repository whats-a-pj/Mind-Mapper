const logout = async () => {
    const logout = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (logout.ok) {
        document.location.replace('/');
    } else {
        alert(logout.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);
