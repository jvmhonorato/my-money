const functions = require("firebase-functions");
const admin = require('firebase-admin');


admin.initializeApp()

exports.soma = functions.databases.ref('/movimentacoes/{dia}')
.onWrite(async(change, context)=> {
    const mesesRef = admin.database().ref('/meses/'+ context.params.dia)
    const movimentacoesRef = change.after.ref
    const movimentacoesSS = await movimentacoesRef.once('value')
    const movimentacoes = movimentacoesSS.val()

    let input = 0
    let output = 0

    Object.keys(movimentacoes).forEach(m => {
        if(movimentacoes[m].valor > 0){
            input += movimentacoes[m].valor
        }else{
            output += movimentacoes[m].valor
        }
    })
    return mesesRef.transaction(current => {
        if(current === null){
            return {
                input,
                output,
                input_forecast: 0,
                output_forecast: 0

            }
        }
        return {
            ...current,
            input,
            output
        }
    })
})


