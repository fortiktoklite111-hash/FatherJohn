// Password Protection
function checkPassword() {
    const password = document.getElementById('password-input').value;
    // You can change the password here
    if (password === '1052005') {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Wrong Secret Code!');
    }
}

// Change Folder Style
function changeFolderStyle(style) {
    const gallery = document.getElementById('photo-gallery');
    if (style === 'list') {
        gallery.classList.remove('photo-grid');
        gallery.classList.add('photo-list');
    } else {
        gallery.classList.remove('photo-list');
        gallery.classList.add('photo-grid');
    }
}
