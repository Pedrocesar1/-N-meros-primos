const contar = () => {
    let init = document.getElementById("txtI")
    let end = document.getElementById("txtF")
    let pass = document.getElementById("txtP")
    let res = document.getElementById("res")

    if (init.value.length === 0 || end.value.length === 0 || pass.value.length === 0 )
    alert("[Error] faltam dados")
    else {
        res.innerHTML = 'contando:'
        let i = Number(init.value)
        let f = Number(end.value)
        let p = Number(pass.value)
        if (i < f){
            for(let c = i; c <= f; c += p) { // CONTAGEM CRESCENTE
              res.innerHTML += `${c} \u{1F449}`      
         if (p <= 0) {
        alert("Passo inválido! Considerando Passo 1")
        p = 1
        }
        
    }
     } else{
         for(let c = i; c >= f; c -= p) { // CONTAGEM DECRESCENTE
            res.innerHTML += `${c} \u{1F449}` 
         }
     } res.innerHTML += '\u{1F3C1}'
     
         
      }
     
}