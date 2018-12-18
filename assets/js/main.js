function toggleMode() {
    var body = document.querySelector('body');
    var mode = body.className === 'dark' ? 'light' : 'dark';
    body.className = mode;
    localStorage.setItem('mode', mode);
}

if ('light' === sessionStorage.getItem('mode')) {
    toggleMode();
}
