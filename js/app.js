window.addEventListener('load', function(event) {
  var text = document.getElementById('tweet');
  var boton = document.getElementById('twittear');
  var twits = document.getElementById('twits');
  var counter = document.getElementById('count');
  var maxLetters = 140;
  var num = '';
  boton.addEventListener('click', function(event) {
    if (text.value) {
      var container = document.createElement('div');
      var paragraph = document.createElement('p');
      var last = document.createElement('strong');
      var day = new Date();
      var hour = day.getHours();
      var minutes = day.getMinutes();
      var publication = hour + ':' + minutes;
      last.textContent = publication;

      paragraph.textContent = text.value;
      
      container.appendChild(paragraph);
      container.appendChild(last);

      twits.appendChild(container);
      container.classList.add('white');
      text.value = '';
    };
  });
  text.addEventListener('keyup', function(event) {
    num = maxLetters - text.value.length;
    counter.value = num;
    counter.textContent = num ;
    if (counter.value < -1) {
      boton.disabled = true;
      counter.classList.add('red');
    } else if (counter.value < 10) {
      counter.classList.add('green');
    } else if (counter.value < 20) {
      counter.classList.add('blue');
    }
  });
});
