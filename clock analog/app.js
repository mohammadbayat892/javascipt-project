function updateClock() {
    const now = new Date();

    // محاسبه زاویه‌ها برای اشاره‌گرهای ساعت، دقیقه و ثانیه
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondAngle = (seconds / 60) * 360;
    const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
    const hourAngle = ((hours % 12 + minutes / 60) / 12) * 360;

    // تنظیم زاویه اشاره‌گر ثانیه
    document.querySelector('.second-hand').style.transform = `rotate(${secondAngle}deg)`;

    // تنظیم زاویه اشاره‌گر دقیقه
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteAngle}deg)`;

    // تنظیم زاویه اشاره‌گر ساعت
    document.querySelector('.hour-hand').style.transform = `rotate(${hourAngle}deg)`;
}

// بروزرسانی ساعت هر ثانیه
setInterval(updateClock, 1000);

// اجرای اولیه تابع برای نمایش زمان فعلی
updateClock();