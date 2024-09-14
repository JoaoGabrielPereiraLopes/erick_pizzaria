function pegador(){
    body=document.getElementById('body_gostoso')
    var produto={'valor':Number(document.getElementById('valor').value),'gasto':Number((document.getElementById('gasto').value)),'quantidade':Number((document.getElementById('quantidade').value))}
    lucro=(produto['valor']-produto['gasto'])*produto['quantidade']
    gasto=produto['gasto']*produto['quantidade']
    body.innerHTML='lucro foi '+lucro+'<br>gasto foi '+gasto
}