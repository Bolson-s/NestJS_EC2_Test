document.addEventListener('DOMContentLoaded', () => {
    // Navigation buttons
    document.getElementById('goToPage1')?.addEventListener('click', () => {
        window.location.href = '/';
    });

    const goToPage2Button = document.getElementById('goToPage2');
    
    // Input validation on index page
    const userNameInput = document.getElementById('userNameInput');
    if (userNameInput && goToPage2Button) {
        userNameInput.addEventListener('input', () => {
            const name = userNameInput.value.trim();
            goToPage2Button.disabled = name === '';
        });
        
        goToPage2Button.addEventListener('click', () => {
            const name = userNameInput.value.trim();
            if (name) {
                localStorage.setItem('userName', name);
                window.location.href = '/page2';
            }
        });
    }
    
    // Display username on page2
    const welcomeHeader = document.querySelector('.welcome-header');
    if (welcomeHeader) {
        const userName = localStorage.getItem('userName') || 'Guest';
        welcomeHeader.textContent += `, ${userName}`;
    }
});
