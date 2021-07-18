let M = [];
let rc = 4;
let count = 0;
let time = 1500;
let timeInterval = 0;
onload  = ()=>{
    CreateArray();
    TableCreate();
    timeInterval = setInterval(ChangeImg,time);
}

function TableCreate(){
    let k = 0;
    let tbl = ``;
    for(let i = 0; i<rc; i++){
        tbl += `<tr>`;
        for(let j = 0; j < rc; j++){
            let Img =  M[i][j] ? M[i][j] : 'img/hole.png';
            tbl += `<td onclick="Click(${i},${j},${k++})"> <img src="${Img}" /> </td>`;
        }
        tbl += `</tr>`;
    }

    document.getElementsByTagName('table')[0].innerHTML = tbl;

}

function CreateArray(){

    for(let i = 0; i<rc;i++){
        M[i] = [];
    }

}

function ChangeImg(){
    let  k = Math.floor(Math.random() * rc);
    let  j = Math.floor(Math.random() * rc);
    for(let i = 0; i<rc;i++){
        M[i] = [];
    }
    M[k][j] = 'img/bas.png';
    TableCreate();
}

function Click(i,j,k){
    document.getElementsByTagName('td')[k].style.cursor = `url("img/hummer-2.png"), pointer`; 
    if(M[i][j] == 'img/bas.png'){
        count++;
    }
    Level(count);
    document.getElementsByTagName('div')[0].innerHTML = `Score: ${count}`
}

function Level(count){
    if(count > 5){
        time = 1000;
        clearInterval(timeInterval);
        timeInterval = setInterval(ChangeImg,time);
    }
    if(count > 15){
        time = 800;
        clearInterval(timeInterval);
        timeInterval = setInterval(ChangeImg,time);
    }
    if(count > 20){
        time = 500;
        clearInterval(timeInterval);
        timeInterval = setInterval(ChangeImg,time);
    }
    if(count > 30){
        time = 250;
        clearInterval(timeInterval);
        timeInterval = setInterval(ChangeImg,time);
    }
}