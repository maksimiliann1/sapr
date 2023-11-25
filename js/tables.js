function table1(){
    let a = document.getElementById("input1");
    let firstDiv = document.getElementById("firstTable");
    let modifiedStr = Number.parseInt(a.value);
    if(a.value.length == modifiedStr.toString().length && a.value.length<2){
        let inputs = '<p>Таблица узлов</p>';
        for(var i = 0; i<modifiedStr; i++){
              //inputs += `<div><input style="justify-content: left;" placeholder="Length"></input style="justify-content: left;"><input placeholder="Width"></input></div>`;
              inputs += `<input id = "inputo${i}" style="justify-content: right;" placeholder="L"></input "><input id = "inputo${i}${i}" placeholder="A"></input><input id = "inputo${i}${i}${i}" style="justify-content: right;" placeholder="E"></input "><input id = "inputo${i}${i}${i}${i}" placeholder="S"></input><br>`;
        }       
           firstDiv.innerHTML = inputs; 
    }else{
        alert("нада интеджер");
    }
}
function table2(){
    var a = document.getElementById("input2");
   // var a = document.getElementById("input2");
    var firstDiv = document.getElementById("secondTable");
    var modifiedStr = Number.parseInt(a.value);
    if(a.value.length == modifiedStr.toString().length && a.value.length<2){
        let inputs = '<p>Таблица сосредоточенных напряжений</p>';
        for(var i = 0; i<modifiedStr; i++){
              //inputs += `<input style="justify-content: center;" placeholder="Узел"></input "><input placeholder="F"></input><br>`;
              inputs += `<input id = "inputf${i}" style="justify-content: right;" placeholder="Узел"></input "><input id = "inputf${i}${i}" placeholder="F"></input><br>`;
        }
           firstDiv.innerHTML = inputs; 
    }else{
        alert("нада интеджер не больше 9");
    }
}

function table3(){
    var a = document.getElementById("input3");
    var firstDiv = document.getElementById("thirdTable");
    var modifiedStr = Number.parseInt(a.value);
    if(a.value.length == modifiedStr.toString().length && a.value.length<2){
        let inputs = '<p>Таблица продольных напряжений</p>';
        for(var i = 0; i<modifiedStr; i++){
              inputs += `<input id = "inputq${i}" style="justify-content: right;" placeholder="Узел"></input "><input id = "inputq${i}${i}" placeholder="q"></input><br>`;
        }
           firstDiv.innerHTML = inputs; 
    }else{
        console.log(a.value, modifiedStr)
        alert("нада интеджер");
    }
}
