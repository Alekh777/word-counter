function calc(Str) {
  let str = Str.value;
  let characters = 0;
  let words = 0;
  for (i = 0; i < str.length; i++) {
    while (str[i] != " " && i < str.length) {
      characters++;
      i++;
    }
    words++;

    if (str[i] == " ") {
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
