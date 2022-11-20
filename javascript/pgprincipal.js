function submeter() {
  //var creatinina = [0.6 , 1.2 , 0.5 , 1.1 , 0.3 , 1.2 , 0.17 , 0.42 , 0.24 , 0.41 ,0.31 , 0.47 ,0.32 , 0.59 , 0.40 , 0.60 , 0.39 , 0.73 ,0.53 , 0.79, 0.57 , 0.87] ;

  var seleçãoExames = document.getElementById('selecaoExames');
  var inputvalorExame = document.getElementById('inputvalorExame');
  var sexoFemMasc = document.getElementById('sexofemininomasculino');
  var numResult = Number(inputvalorExame.value);
  var sexoResult = (sexoFemMasc.value);
  var selecionado = (seleçãoExames.value)
  if (sexoResult === 'feminino') {
    switch (selecionado) {
      case 'creatinina':
        if (numResult >= 0.5 && numResult <= 1.1) {
          console.log('creatinina acima de 0.5 e menor que 1.1 é normal para o sexo feminino adulto');
        } else {
          if(numResult < 0.5) {
            console.log('creatinina baixa')
          } else {
            console.log('creatinina alta')
          }
        }
        break;
      case 'glicemia':
        if (numResult >= 70 && numResult <= 100) {
          console.log('glicemia dentro do ideal');
        } else {
          if (numResult < 70) {
            console.log('glicemia baixa');
          } else {
            console.log('glicemia alta')
          }
        }
        break;



      default:
       
         console.log('escolha o resultado')
        
        break;
    }
  }else {
    switch (selecionado) {
      case 'creatinina':
        if (numResult >= 0.6 && numResult <= 1.2) {
          console.log('creatinina acima de 0.6 e menor que 1.2 é normal para o sexo masculino adulto');
        } else {
          if(numResult < 0.6) {
            console.log('creatinina baixa')
          } else {
            console.log('creatinina alta')
          }
        }
        break;
      case 'glicemia':
        if (numResult >= 70 && numResult <= 100) {
          console.log('glicemia dentro do ideal');
        } else {
          if (numResult < 70) {
            console.log('glicemia baixa');
          } else {
            console.log('glicemia alta')
          }
        }
        break;



      default:
       
         console.log('escolha o resultado')
        
        break;
    }
  }

  





  var creatininaNormalFem = numResult => 0.5 || numResult <= 1.1  ;
  var creatininaNormalMasc = numResult => 0.6 ||numResult <= 1.2 ;
  
  if(seleçãoExames=== 'creatinina' && sexoFemMasc === 'feminino' ){
    console.log('é creatinina');
    console.log('feminino');
    (creatininaNormalFem = true ?console.log('creatinina não estável'):console.log('creatinina normal para o sexo feminino'));
  
  }else{
    if(seleçãoExames=== 'creatinina' && sexoFemMasc === 'masculino' ){
      console.log('masculino');
    (sexoFemMasc = 'masculino' ? console.log('sexo masculino'):'');
    
    (creatininaNormalMasc = true ?console.log('creatinina não estável'): console.log('normal para sexo masculino'));
    }else{
      return 0;
    }
  }
}
