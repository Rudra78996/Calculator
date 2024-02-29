let equation = "";
let key = document.querySelector(".key");
let result = document.querySelector(".result");
key.addEventListener("click", (event)=>{
    let task = event.target.innerText;
    if(task!="Delete" && task!="=" &&task!="C" &&task!="CE" &&task!="1/x" && task!="x^2" && task!="%"&& task!="root"){
        result.append(task);
        equation = equation+task;
    }
    switch(task){
        case "CE":{
            result.innerText = "";
            equation = "";
            break;
        }
        case "%":{
            result.append(task);
            equation = equation+"/100";
            break;
        }
        case "x^2":{
            result.append("^2");
            equation = equation+"^2";
            break;
        }
        case "1/x":{
            result.append("1/");
            equation = equation+"1/";
            break;
        }
        case "root":{
            result.append("root");
            equation = equation+"^0.5";
            break;
        }
        case "Delete":{
            let content = result.innerText;
            let newContent = content.slice(0,content.length-1);
            result.innerText=newContent;
            equation = newContent;
            break;
        }
        case "=":{
            console.log(equation);
            result.innerText=equationSolver(equation);
            break;
        }
    }
});
function equationSolver(equation){
    try{
        return math.evaluate(equation);
    }
    catch{
        result.innerText="Error"
    }
}