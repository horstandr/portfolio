function openPage(url, special = true) {
    if (special){
        document.getElementById('transition').style.backgroundColor = localStorage.getItem('secundary-color');
    } else {
        document.getElementById('transition').style.backgroundColor = localStorage.getItem('primary-color');
    }
    delayUrlLoad(url, 400);
    document.getElementById('transition').style.display = 'block';gsap.to('#transition', {duration:0.1, opacity: 1});
}