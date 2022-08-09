 const DATA = new Date();

 var dia =DATA.getDay();
 var mes = DATA.getMonth();
 var ano = DATA.getFullYear();
 

 const OBJETO =["Domingo","Segunda-feira ","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"];
 const OBJETOMES =["janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

 function determinaDia( dia)
 {

    var nomeDiaSemana;
 switch (dia) {
    case 0:
        nomeDiaSemana = OBJETO[0];
        break;
    case 1:
        nomeDiaSemana = OBJETO[1];
        break;
    case 2:
        nomeDiaSemana = OBJETO[2];
    
        break;
    case 3:
        nomeDiaSemana = OBJETO[3];
        
        break;
    case 4:
        nomeDiaSemana = OBJETO[4];
    
        break;
    case 5:
        nomeDiaSemana = OBJETO[5];
    
    break;
    case 6:
        nomeDiaSemana = OBJETO[6];
        
        break;  

    default:
        break;
 }

 return nomeDiaSemana;
}


function determinaMes(mes)
 {

    var nomeMes;
 switch (mes) {
    case 0:
        nomeMes = OBJETOMES[0];
        break;
    case 1:
        nomeMes = OBJETOMES[1];
        break;
    case 2:
        nomeMes = OBJETOMES[2];
    
        break;
    case 3:
        nomeMes = OBJETOMES[3];
        
        break;
    case 4:
        nomeMes = OBJETOMES[4];
    
        break;
    case 5:
        nomeMes = OBJETOMES[5];
    
    break;
    case 6:
        nomeMes = OBJETOMES[6];
        
        break;
    case 7:
        nomeMes = OBJETOMES[7];
        
        break;
    case 8:
        nomeMes = OBJETOMES[8];
        
        break;  
    case 9:
        nomeMes = OBJETOMES[9];
        
        break;
    case 10:
        nomeMes = OBJETOMES[10];
        
        break;
    case 11:
        nomeMes = OBJETOMES[11];
        
        break;

    default:
        break;
 }

 return nomeMes;
}

var day = determinaDia(dia);
var month = determinaMes(mes);


document.getElementById("data").innerHTML = day +" , "+ DATA.getDate()+"  "+month+" de "+ano+ " "+DATA.getHours()+":"+DATA.getMinutes();