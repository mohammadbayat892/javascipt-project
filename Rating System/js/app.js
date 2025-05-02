const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating');
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', handleMouseOver);
    star.addEventListener('mouseout', handleMouseOut);
    star.addEventListener('click', handleClick);
});

function handleMouseOver(e) {
    const value = e.target.getAttribute('data-value');
    highlightStars(value);
}

function handleMouseOut() {
    highlightStars(currentRating);
}

function handleClick(e) {
    currentRating = e.target.getAttribute('data-value');
    ratingValue.textContent = currentRating;
    highlightStars(currentRating);
}

function highlightStars(value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}
