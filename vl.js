
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ('Happy 16 Valen! God bless you love <33').split('')
      const titleElement = document.getElementById('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 300); // 900ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };