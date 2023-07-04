// Funcion para el ingreso de las vueltas de cada fase
let tipo_motor = document.querySelectorAll("input[type=radio]")
tipo_motor.forEach( t => {
    t.addEventListener('change', e =>{
        let container = document.querySelector('.container_vueltas')
        if(e.target.value=='monofasico'){
            container.innerHTML=`
                <h3>Cantidad de vueltas</h3>
                <h4>Fase 1<h4>
                <input type='number' name='fase[]'>`
        }else{
            container.innerHTML=`
                <h3>Cantidad de vueltas</h3>
                <h4>Fase 1<h4>
                <input type='number' name='fase[]'>
                <h4>Fase 2<h4>
                <input type='number' name='fase[]'>
                <h4>Fase 3<h4>
                <input type='number' name='fase[]'>
                `
        }
    })
})
///////////////////////////////////////////////
//Funcion para la accion de apretar en calcular
let bt_calcular = document.getElementById('calcular')
bt_calcular.addEventListener('click',e=>{
    let total = totalDeAlambre()
    totalGastado(total)
})

/**
 * 1) Funcion para calcular el total de material gastado
 */
function totalDeAlambre(){
    //devuelve el tipo de motor seleccionado (monofasico o trifasico)
    let tipo_motor = document.querySelector('input[name=tipo]:checked').value
    //devuelve la cantidad de ranuras del motor
    let cant_ranuras = parseInt(document.getElementById('ranuras').value)
    //devuelve el largo del nucleo (en cm)
    let largo_nucleo = parseInt(document.getElementById('nucleo').value)

    // recorre la/s fase/s y guarda el numero de vueltas en un arreglo
    let vueltas = []
    document.getElementsByName("fase[]").forEach(v => {
        vueltas.push(parseInt(v.value))
    })

    let total = 0 

    alert("El total de materia es de ")

    return total
}

/**
 * 2) Funcion para calcular el total del precio
 */
function totalGastado(total){
    //devuelve el diametro del motor
    let diametro = document.getElementById('diametro').value

    let total
    
    alert("el precio total es de")

}