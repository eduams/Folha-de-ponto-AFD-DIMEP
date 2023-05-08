var afd;
var lastPosition = 0;
// var funcionarioDados = {
//     nome:"null",
//     ano:"null",
//     mes:"null",
//     dia:"null"
// };
var funcionarioDados={};

var year;
var month;

    for(i = 1 ; i <= 31 ; i ++){
        let dias = document.createElement("div");
        dias.setAttribute('class','line')
        dias.setAttribute('id','dia'+i)

        let dia = document.createElement("h5");
        dia.textContent = i;
        dia.setAttribute('class','slim');

        let horaentrada = document.createElement("h5");
        horaentrada.setAttribute('id','horaentrada'+i)
        horaentrada.textContent = '-';

        let horasaida = document.createElement("h5");
        horasaida.setAttribute('id','horasaida'+i)
        horasaida.textContent = '-';

        let emptybox = document.createElement("h5");
        emptybox.textContent = '.';
        let emptybox2 = document.createElement("h5");
        emptybox2.textContent = '.';

        dias.className = "line";
        document.getElementById("body").appendChild(dias);
        document.getElementById('dia'+i).appendChild(dia);
        document.getElementById('dia'+i).appendChild(horaentrada);
        document.getElementById('dia'+i).appendChild(horasaida);
        document.getElementById('dia'+i).appendChild(emptybox);
        document.getElementById('dia'+i).appendChild(emptybox2);


    }
    
    document.getElementById('inputFile').addEventListener('change',function(){
        var file_reader=new FileReader();
        file_reader.onload=function(){
            // document.getElementById('output').textContent=file_reader.result;
            afd = file_reader.result.toString();
        }
        file_reader.readAsText(this.files[0]);
    })

function consolelog(){
    var year = 2023;
    var month = 3;
    var anoEmes = '032023';
    let diabuffer = 1;

        while(diabuffer <=31)
        {
            if(diabuffer<10){
                lastPosition = afd.search('0'+[diabuffer]+[anoEmes]) - 1; 
            }
            else{
                lastPosition = afd.search([diabuffer]+[anoEmes]) - 1; 
            }
            diabuffer = diabuffer+1;
            if(lastPosition > 0){
                break;
            }
        }
    var id = '012228789765';

    let positionJump = 0;
    let getname = true;

    for(let i = 0; i < 31 ; i++){
    let position = afd.indexOf(id, lastPosition);

    let primeiroresultado = afd.search(id)

    if(getname = true){
        document.getElementById('funcionario').textContent = afd.substring(primeiroresultado + 12, primeiroresultado + 50);
        getname = false;
    }

    if(afd.substring(position - 1, position) == 'A'){
        console.log('No!');
        positionJump++;
        funcionarioDados[i] = new Object();
        funcionarioDados[i].ano = null;
        funcionarioDados[i].mes = null;
        funcionarioDados[i].dia = null;  

    }
    else{
        funcionarioDados[i] = new Object();
        funcionarioDados[i].ano = afd.substring(position - 8, position - 4);
        funcionarioDados[i].mes = afd.substring(position - 10, position - 8);
        funcionarioDados[i].dia = afd.substring(position - 12, position - 10);    
        funcionarioDados[i].horaentradadata = afd.substring(position - 4, position - 0)
    }
    lastPosition = position + 1;
    }

    for(let j = 0; j<99;j++){
        if(funcionarioDados[j].mes > month){
            break;
        }
        if(funcionarioDados[j].ano == null){
        }
        else{
            if(document.getElementById("horaentrada"+parseInt(funcionarioDados[j].dia)).textContent !== '-'){
                document.getElementById("horasaida"+parseInt(funcionarioDados[j].dia)).textContent=[funcionarioDados[j].horaentradadata.slice(0,2)]+':'+[funcionarioDados[j].horaentradadata.slice(2,4)];
            }
            else{
                document.getElementById("horaentrada"+parseInt(funcionarioDados[j].dia)).textContent=[funcionarioDados[j].horaentradadata.slice(0,2)]+':'+[funcionarioDados[j].horaentradadata.slice(2,4)];
            }
            console.log(funcionarioDados[j].horaentradadata);
            console.log(funcionarioDados[j].ano);
            console.log(funcionarioDados[j].mes);
            console.log(funcionarioDados[j].dia);
        }
    }
}

