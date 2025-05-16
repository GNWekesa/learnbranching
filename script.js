    const greetings = [
      { text: "Hello", lang: "English" },
      { text: "Habari", lang: "Swahili" },
      { text: "Oriena", lang: "Bukusu" },
      { text: "Sawubona", lang: "Zulu" },
      { text: "Bonjour", lang: "French" },
      { text: "Hola", lang: "Spanish" },
      { text: "مرحبًا", lang: "Arabic" },
      { text: "你好", lang: "Chinese (Mandarin)" },
      { text: "こんにちは", lang: "Japanese" },
      { text: "नमस्ते", lang: "Hindi" },
      { text: "Hallo", lang: "German" },
      { text: "Ciao", lang: "Italian" },
      { text: "Olá", lang: "Portuguese" },
      { text: "Привет", lang: "Russian" },
      { text: "안녕하세요", lang: "Korean" },
      { text: "ሰላም", lang: "Amharic" }
    ];

    let index = 0;
    const greetingDiv = document.getElementById('greetingDisplay');



function showGreeting() {
  const greeting = greetings[index];
  greetingDiv.classList.remove('show', 'animate__fadeIn');
  
  setTimeout(() => {
    greetingDiv.innerHTML = `${greeting.text}<small>${greeting.lang}</small>`;
    greetingDiv.classList.add('show', 'animate__fadeIn');
    index = (index + 1) % greetings.length;
  }, 500);// Wait before showing new greeting
}

    showGreeting();
    setInterval(showGreeting, 3000);


    
  //  function showGreeting() {
    //    const greeting = greetings[index];
    //    greetingDiv.classList.remove('show');

    //    setTimeout(() => {
    //      greetingDiv.innerHTML = `${greeting.text}<small>${greeting.lang}</small>`;
     //     greetingDiv.classList.add('show');
    //      index = (index + 1) % greetings.length;
    //    }, 500); 
    //  }  //