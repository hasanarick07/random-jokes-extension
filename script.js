fetch("https://icanhazdadjoke.com/slack")
  .then(res => res.json())
  .then(data => {
    const practice = data.attachments[0].text;
    const practiceElement = document.getElementById("pe");
    practiceElement.innerHTML = practice;
    console.log(practice);
  });
