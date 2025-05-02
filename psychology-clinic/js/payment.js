document.getElementById('appointmentDate').addEventListener('change', function(e) {
    const selectedDate = e.target.value;
    const availableDoctors = doctors.filter(d => d.schedule.includes(selectedDate));
    
    const doctorsList = document.getElementById('doctorsList');
    doctorsList.innerHTML = '';
    
    availableDoctors.forEach(doctor => {
        const div = document.createElement('div');
        div.className = 'doctor-card';
        div.innerHTML = `
            <h3>${doctor.name}</h3>
            <p>قیمت: ${doctor.price.toLocaleString()} تومان</p>
            <button onclick="bookDoctor(${doctor.id})">رزرو</button>
        `;
        doctorsList.appendChild(div);
    });
});

function bookDoctor(doctorId) {
    const doctor = doctors.find(d => d.id === doctorId);
    if(doctor.schedule.length >= 5) { // فرض 5 نوبت در روز
        alert('ظرفیت این پزشک تکمیل شده است');
        return;
    }
    document.getElementById('paymentSection').style.display = 'block';
}

function processPayment() {
    const trackingCode = Math.random().toString(36).substr(2, 8).toUpperCase();
    alert(`پرداخت موفق! کد رهگیری: ${trackingCode}`);
    localStorage.setItem('trackingCode', trackingCode);
}document.getElementById('appointmentDate').addEventListener('change', function(e) {
    const selectedDate = e.target.value;
    const availableDoctors = doctors.filter(d => d.schedule.includes(selectedDate));
    
    const doctorsList = document.getElementById('doctorsList');
    doctorsList.innerHTML = '';
    
    availableDoctors.forEach(doctor => {
        const div = document.createElement('div');
        div.className = 'doctor-card';
        div.innerHTML = `
            <h3>${doctor.name}</h3>
            <p>قیمت: ${doctor.price.toLocaleString()} تومان</p>
            <button onclick="bookDoctor(${doctor.id})">رزرو</button>
        `;
        doctorsList.appendChild(div);
    });
});

function bookDoctor(doctorId) {
    const doctor = doctors.find(d => d.id === doctorId);
    if(doctor.schedule.length >= 5) { // فرض 5 نوبت در روز
        alert('ظرفیت این پزشک تکمیل شده است');
        return;
    }
    document.getElementById('paymentSection').style.display = 'block';
}

function processPayment() {
    const trackingCode = Math.random().toString(36).substr(2, 8).toUpperCase();
    alert(`پرداخت موفق! کد رهگیری: ${trackingCode}`);
    localStorage.setItem('trackingCode', trackingCode);
}