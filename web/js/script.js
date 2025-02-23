

function render(){
    fetch('../js/questions.json')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        ques = data.questions
        for(let i = 0 ;i<ques.length;i++){
            switch(ques[i].type){
                case 'text':{
                    document.getElementById('mainDiv').innerHTML+=`
                    <div class = 'queDiv' id = 'que-${i+1}'>
                        <p>Question # ${i+1}</p>
                        <p class = 'ques'>${ques[i].question}</p>    
                        <input class = 'ans' type = 'text'/>
                    </div>
                    `
                }
                case "radio":{
                    document.getElementById('mainDiv').innerHTML+=`
                    <div class = 'queDiv' id = 'que-${i+1}'>
                        <p>Question # ${i+1}</p>`
                    ques[i].options.map((option)=>{
                        document.getElementById(`que-${i+1}`).innerHTML+=`
                        
                        <p><input type = radio name = '${option.text}'><span>${option.text}</span></input></p>
                        `
                    })
                }
            }
        }
    })
}