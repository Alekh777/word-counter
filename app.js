function calc(Str) {
  let str = Str.value;
  let characters = 0;
  let words = 0;
  for (i = 0; i < str.length; i++) {
    if(str[i] == '\n')
      continue;
    while (str[i] != " " && i < str.length && str[i] != '\n') {
      characters++;
      i++;
    }
    words++;

    if (str[i] == " " && str[i] != '\n') {
      characters++;
      i++;
      while (str[i] == " " && i < str.length) {
        i++;
        characters++;
      }
      i--;
    }
  }
  if(str[0] == ' ')
    words--;
  document.getElementById('chars').innerText = 'Total Characters: ' + characters;
  document.getElementById('words').innerText = 'Total Words: ' + words;
}

function changeTheme(){
  let circle = document.querySelector('#circle');
  let val = getComputedStyle(circle).getPropertyValue('left');
  if(val == '0px'){
    circle.style.setProperty('left', "22px");
  }
  else if(val == '22px')
  circle.style.setProperty('left', '0px');
}