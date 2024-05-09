
let nombre = 'pepe' /*PEPE 1° VALOR FUERA DEL BLOQUE */
console.log(nombre)
{
    let nombre = 'pedro' /* PEDRO 2° SEGUNDO VALOR SUPERIO */
    console.log(nombre)
    {
        let nombre = 'maria' /* MARIA 3° VALOR ASIGNADO */
        console.log(nombre)
    }
    {
        let nombre = 'leonel' /* LEONEL 4 ° VALOR ASIGNADO */
        console.log(nombre)
        {
            nombre = 'julieta' /* JULIETA 5° VALOR ASIGNADO */
            console.log(nombre)
        }
        console.log(nombre) /* JULIETA 6° VALOR REASIGNADO */
    }
    console.log(nombre)/* PEDRO 7° VALOR ASIGNADO */
    nombre = 'juan'
}
console.log(nombre) /* VUELVE A LLAMAR A PEPE */

