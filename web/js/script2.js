var host = "http://localhost:3000";
function loadQuiz() {
  let selected = document.getElementById("quizSelect").value;
  fetch(`${host}/${selected}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("mainDiv").innerHTML = "";
      ques = data;
      for (let i = 0; i < ques.length; i++) {
        switch (ques[i].type) {
          case "text": {
            document.getElementById("mainDiv").innerHTML += `
                      <div class = 'queDiv' id = 'que-${i + 1}'>
                          <p>Question # ${i + 1}</p>
                          <p class = 'ques'>${ques[i].question}</p>    
                          <input class = 'ans' type = 'text'/>
                      </div>
                      `;
            break;
          }
          case "radio": {
            document.getElementById("mainDiv").innerHTML += `
                          <div class = 'queDiv' id = 'que-${i + 1}'>
                              <p>Question # ${i + 1}</p>
                              <p>${ques[i].question}</p>
                              `;

            ques[i].options.map((option) => {
              document.getElementById(`que-${i + 1}`).innerHTML += `
                              
                              <p>
                                  <input type = "radio" name = 'que-${
                                    i + 1
                                  }' value = '${option.text}' id = 'que-${
                i + 1
              }-${option.text.slice(0, 15)}' />
                                  <label for ='que-${i + 1}-${option.text.slice(
                0,
                15
              )}' >${option.text}</lable>
                              </p>
                              `;
              document.getElementById("mainDiv").innerHTML += "</div>";
            });
            break;
          }
          case "list": {
            document.getElementById("mainDiv").innerHTML += `
                          <div class = 'queDiv' id = 'que-${i + 1}'>
                              <p>Question # ${i + 1}</p>
                              <p>${ques[i].question}</p>
                              <select id = 'que-${i + 1}-select' multiple>
                          `;
            ques[i].options.map((option) => {
              document.getElementById(`que-${i + 1}-select`).innerHTML += `
                      <option>${option.text}</option>
                  `;
              document.getElementById("mainDiv").innerHTML += "</select>";
            });
            break;
          }
          case "checkbox": {
            document.getElementById("mainDiv").innerHTML += `
                          <div class = 'queDiv' id = 'que-${i + 1}'>
                              <p>Question # ${i + 1}</p>
                              <p>${ques[i].question}</p>
                              `;

            ques[i].options.map((option) => {
              document.getElementById(`que-${i + 1}`).innerHTML += `
                              
                              <p>
                                  <input type = "checkbox" name = 'que-${
                                    i + 1
                                  }' value = '${option.text}' id = 'que-${
                i + 1
              }-${option.text.slice(0, 15)}' />
                                  <label for ='que-${i + 1}-${option.text.slice(
                0,
                15
              )}' >${option.text}</lable>
                              </p>
                              `;
              document.getElementById("mainDiv").innerHTML += "</div>";
            });
            break;
          }
        }
      }
      document.getElementById('mainDiv').innerHTML+=`
      <button id = 'submitBtn' onclick = 'submit()'>Submit</button>`
    });
}
