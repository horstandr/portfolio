function openPage(url, special = true) {
    if (special){
        document.getElementById('transition').style.backgroundColor = localStorage.getItem('secundary-color');
    }
    delayUrlLoad(url, 400);
    document.getElementById('transition').style.display = 'block';gsap.to('#transition', {duration:0.2, opacity: 1});
}