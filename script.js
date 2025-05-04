document.addEventListener('DOMContentLoaded', function() {
    // Get the navigation buttons
    const registerBtn = document.querySelector('a[href="register.html"]');
    const employeesBtn = document.querySelector('a[href="employees.html"]');
    
    // Create a modal for validation messages
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.maxWidth = '400px';
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Show modal function
    function showModal(message) {
        modalContent.innerHTML = `
            <p>${message}</p>
            <button style="margin-top: 10px; padding: 5px 10px; background: #3498db; color: white; border: none; border-radius: 3px;">OK</button>
        `;
        modal.style.display = 'flex';
        
        modalContent.querySelector('button').addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Intercept register button click
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a temporary form for validation
        const formHTML = `
            <div style="background: white; padding: 20px; border-radius: 5px; max-width: 400px;">
                <h2 style="margin-top: 0;">Register Employee</h2>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Full Name*</label>
                    <input type="text" id="tempName" style="width: 100%; padding: 8px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Email*</label>
                    <input type="email" id="tempEmail" style="width: 100%; padding: 8px;">
                </div>
                <button id="tempSubmit" style="background: #3498db; color: white; padding: 8px 15px; border: none; border-radius: 3px;">Submit</button>
            </div>
        `;
        
        modalContent.innerHTML = formHTML;
        modal.style.display = 'flex';
        
        // Handle form submission
        document.getElementById('tempSubmit').addEventListener('click', function() {
            const name = document.getElementById('tempName').value.trim();
            const email = document.getElementById('tempEmail').value.trim();
            
            if (!name) {
                showModal('Please enter employee name');
                return;
            }
            
            if (!email) {
                showModal('Please enter email address');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showModal('Please enter a valid email');
                return;
            }
            
            showModal('Employee registered successfully!');
            setTimeout(() => {
                modal.style.display = 'none';
                window.location.href = 'register.html'; // Proceed after validation
            }, 1500);
        });
    });
    
    // Intercept employees button click
    employeesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a temporary search form
        const formHTML = `
            <div style="background: white; padding: 20px; border-radius: 5px; max-width: 400px;">
                <h2 style="margin-top: 0;">View Employees</h2>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Search Term (optional)</label>
                    <input type="text" id="tempSearch" style="width: 100%; padding: 8px;">
                </div>
                <button id="tempView" style="background: #3498db; color: white; padding: 8px 15px; border: none; border-radius: 3px;">View Employees</button>
            </div>
        `;
        
        modalContent.innerHTML = formHTML;
        modal.style.display = 'flex';
        
        document.getElementById('tempView').addEventListener('click', function() {
            modal.style.display = 'none';
            window.location.href = 'employees.html';
        });
    });
});