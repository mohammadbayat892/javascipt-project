// لاگین بیمار
function patientLogin() {
    const username = document.getElementById('patient-username').value;
    const password = document.getElementById('patient-password').value;
    
    if(username === "patient" && password === "1234") {
        window.location.href = "patient-dashboard.html";
    } else {
        alert("اطلاعات ورود اشتباه است!");
    }
}

// مدیریت نمایش فرم لاگین
function showLogin(userType) {
    let formContent = '';
    
    switch(userType) {
        case 'doctor':
            formContent = `
                <h3>ورود پزشکان</h3>
                <input type="text" placeholder="نام کاربری" id="doctor-username">
                <input type="password" placeholder="رمز عبور" id="doctor-password">
                <button onclick="doctorLogin()">ورود</button>
            `;
            break;
            
        case 'patient':
            formContent = `
                <h3>ورود بیماران</h3>
                <input type="text" placeholder="نام کاربری" id="patient-username">
                <input type="password" placeholder="رمز عبور" id="patient-password">
                <button onclick="patientLogin()">ورود</button>
            `;
            break;
    }
    
    document.getElementById('login-modal').innerHTML = formContent;
    document.getElementById('login-modal').style.display = 'block';
}