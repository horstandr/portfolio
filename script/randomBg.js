var randomColor = '';

function onPageLoad() {

    // Random background
    if (localStorage.getItem('rbg') == false || localStorage.getItem('rbg') == null) {
      const colors = ['darkred', 'darkblue', 'darkgreen']
      const coolColors = ['rgb(255, 216, 216)', 'aliceblue', 'rgb(222, 255, 222)']
      var randomNr = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomNr];
      var r = document.querySelector(':root');
      r.style.setProperty('--primary', randomColor);
      r.style.setProperty('--secundary', coolColors[randomNr]);
      localStorage.setItem('bgcolor', randomColor);
      localStorage.setItem('secundary-color', coolColors[randomNr]);
      localStorage.setItem('rbg', true);
      
    } else {
        var r = document.querySelector(':root');
        r.style.setProperty('--primary', localStorage.getItem('bgcolor'));
        r.style.setProperty('--secundary', localStorage.getItem('secundary-color'));
    }
}

function importBackground() {
    var r = document.querySelector(':root');
    r.style.setProperty('--primary', localStorage.getItem('bgcolor'));
    r.style.setProperty('--secundary', localStorage.getItem('secundary-color'));
}

function delayUrlLoad(url, mils)
{
    setTimeout(function() {
        document.getElementById('transition').style.display = 'none';
        window.open(url, '_self');
    }, mils)
}

