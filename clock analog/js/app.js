const deg = 6;
const horArrow = document.querySelector("#h-arrow");
const minArrow = document.querySelector("#m-arrow");
const secArrow = document.querySelector("#s-arrow");
const digitalClock = document.querySelector("#digital-clock");

setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let hDgree = h * 30;
    let mDgree = m * deg;
    let sDgree = s * deg;

    horArrow.style.transform = `rotateZ(${hDgree + mDgree / 12}deg)`;
    minArrow.style.transform = `rotateZ(${mDgree}deg)`;
    secArrow.style.transform = `rotateZ(${sDgree}deg)`;

    showTime(h, m, s);
});

function showTime(h, m, s) {
    let midnight = "AM";
    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        midnight = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let timeString = h + ":" + m + ":" + s + " " + midnight;
    digitalClock.innerText = timeString;
}
