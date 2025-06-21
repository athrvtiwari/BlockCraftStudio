function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    toggleTextColor();
    toggleGeneratedCodeColor();
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// New function to toggle text color
function toggleTextColor() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.color = 'white';
    } else {
        document.body.style.color = 'black';
    }
}

// New function to toggle generated code color
function toggleGeneratedCodeColor() {
    const generatedCodeElement = document.getElementById('generatedCode');
    if (document.body.classList.contains('dark-mode')) {
        generatedCodeElement.style.color = 'white';
        generatedCodeElement.style.backgroundColor = '#1e1e1e';
    } else {
        generatedCodeElement.style.color = 'black';
        generatedCodeElement.style.backgroundColor = '#f8f9fa';
    }
}

// Check the saved mode on page load
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleTextColor();
        toggleGeneratedCodeColor();
    }
}
