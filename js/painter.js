function paintConstruction(oporesMass, powerfMass, powerqMass){
    let insert = "";
    
    //console.log(oporeRigth);
    
    let range = -240;
    let lastPos = 30
    for (let i = 0; i<oporesMass.length; i+=4){
        if(i===0){
            for(var j = 0; j<powerqMass.length; j+=2){
                console.log (powerqMass.length);
                if(powerqMass[j] == 1){
                    if(powerqMass[j+1]<0){
                        let inputStr = "&#8592;"
                        inputStr = inputStr.repeat(5*oporesMass[i]);
                        insert+=`<p style ="position: absolute; left: ${-240}px; top: ${40 + oporesMass[i+1]/2}px; solid; margin:auto;">${inputStr}</p>`;
                    }else{
                        let inputStr = "&#8594;"
                        inputStr = inputStr.repeat(5*oporesMass[i]);
                        insert+=`<p style ="position: absolute; left: ${-240}px; top: ${40 + oporesMass[i+1]/2}px; solid; margin:auto;">${inputStr}</p>`;
                    }
                }
            }
            for(var j = 0; j<powerfMass.length; j+=2){
                console.log (powerfMass.length);
                if(powerfMass[j] == 1){
                    if(powerfMass[j+1]<0){
                        // insert+=`<p style ="position: absolute; left: ${-240}px; top: ${40 + oporesMass[i+1]/2}px; solid; margin:auto;">${inputStr}</p>`;
                        insert+=`<div style ="position: absolute; left: ${-280}px; top: 50px; solid; margin:auto;"><div class = "line"><div class = "bullet2"></div></div></div>`;
                    }else{
                        // insert+=`<p style ="position: absolute; left: ${-240}px; top: ${40 + oporesMass[i+1]/2}px; solid; margin:auto;">${inputStr}</p>`;
                        insert+=`<div style ="position: absolute; left: ${-240}px; top: 50px; solid; margin:auto;"><div class = "line"><div class = "bullet" ></div></div></div>`;
                    }
                }
            }
            insert+=`<div id = "pryam${0}" style ="width: ${80*oporesMass[i]}px; height: ${40*oporesMass[i+1]}px; position: absolute; left: -240px; top: 30px; border:1px solid; margin:auto;"></div>`;
        }else{
            if(oporesMass[i+1] > oporesMass[i-3]){
                lastPos -= 20*(oporesMass[i+1]-oporesMass[i-3]);
            }else if(oporesMass[i+1] < oporesMass[i-3]){
                lastPos += 20*(oporesMass[i-3]-oporesMass[i+1]);
            }
            for(var j = 0; j<powerqMass.length; j+=2){
                console.log (powerqMass.length);
                if(powerqMass[j] == i/4+1){
                    if(powerqMass[j+1]<0){
                        let inputStr = "&#8592;"
                        inputStr = inputStr.repeat(5*oporesMass[i]);
                        console.log(inputStr);
                        insert+=`<p style ="position: absolute; left: ${range+oporesMass[i-4]*80}px; top: ${40 + oporesMass[i+1]/2}px; solid; margin:auto;">${inputStr}</p>`;
                    }else{
                        let inputStr = "&#8594;"
                        inputStr = inputStr.repeat(5*oporesMass[i]);
                        console.log(inputStr);
                        insert+=`<p style ="position: absolute; left: ${range+oporesMass[i-4]*80}px; top: ${40 + oporesMass[i+1]/2}px; solid; margin:auto;">${inputStr}</p>`;
                    }
                }
            }
            for(var j = 0; j<powerfMass.length; j+=2){
                console.log (powerfMass.length);
                if(powerfMass[j] == i/4+1){
                    if(powerfMass[j+1]<0){
                        let inputStr = "&#10229;"
                        inputStr = inputStr.repeat(5*oporesMass[i]);
                        console.log(inputStr);
                        // insert+=`<p style ="position: absolute; left: ${range+oporesMass[i-4]*80}px; top: ${40 + oporesMass[i+1]/2}px; solid; margin:auto;">${inputStr}</p>`;
                        insert+=`<div style ="position: absolute; left: ${range+oporesMass[i-4]*80-40}px; top: 50px; solid; margin:auto;"><div class = "line"><div class = "bullet2"></div></div></div>`;
                    }else{
                        let inputStr = "&#10230;"
                        // insert+=`<p style ="position: absolute; left: ${range+oporesMass[i-4]*80}px; top: ${40 + oporesMass[i+1]/2}px; solid; margin:auto;">${inputStr}</p>`;
                        insert+=`<div style ="position: absolute; left: ${range+oporesMass[i-4]*80}px; top: 50px; solid; margin:auto;"><div class = "line"><div class = "bullet" ></div></div></div>`;
                    }
                }
            }
            insert+=`<div id = "pryam${i/4}" style ="width: ${80*oporesMass[i]}px; height: ${40*oporesMass[i+1]}px; position: absolute; left: ${range+oporesMass[i-4]*80}px; top: ${lastPos}px; border:1px solid; margin:auto;"></div>`;
            range+=oporesMass[i-4]*80;
           
        }
        
        
    }
    if(document.getElementById(`rigthOpor`).checked){
        insert+=`<div style ="position: absolute; left: ${range}px; top: 50px; solid; margin:auto;"><div class = "line"></div></div>`
    }
        

    return insert;
}


function formJson() {
const oporesStr = document.getElementById("input1");
    const oporesNum = Number.parseInt(oporesStr.value);
    // console.log(oporesNum);
    
    const powerfStr = document.getElementById("input2");
    const powerfNum = Number.parseInt(powerfStr.value);
    const powerqStr = document.getElementById("input3");
    const powerqNum = Number.parseInt(powerqStr.value);
    let oporesMass = [];
    let powerfMass = [];
    let powerqMass = [];
    for(let i=0; i<oporesNum; i++){
        let L = parseFloat(document.getElementById(`inputo${i}`).value),
        A = parseFloat(document.getElementById(`inputo${i}${i}`).value),
        E = parseFloat(document.getElementById(`inputo${i}${i}${i}`).value),
        S = parseFloat(document.getElementById(`inputo${i}${i}${i}${i}`).value);
        oporesMass.push(L, A, E, S)
    }
    for(let i=0; i<powerfNum; i++){
        let opor = Number.parseInt(document.getElementById(`inputf${i}`).value),
        F = Number.parseInt(document.getElementById(`inputf${i}${i}`).value);
        powerfMass.push(opor, F);
    }
    for(let i=0; i<powerqNum; i++){
        let opor = Number.parseInt(document.getElementById(`inputq${i}`).value),
        q = Number.parseInt(document.getElementById(`inputq${i}${i}`).value);
        powerqMass.push(opor, q);
    }
    // console.log(oporesMass);
    // console.log(powerfMass);
    
     //console.log(powerqMass);
     paintDiv = document.getElementById("painter");
     paintDiv.innerHTML = paintConstruction(oporesMass, powerfMass, powerqMass, paintDiv);
}
