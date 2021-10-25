const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta) =>{

    console.log("El hasta es", hasta);
    try {
        
        
        let salida ='';
        let salidaToFile ='';
        
        for(let i = 1; i<=hasta; i++){
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
            salidaToFile += `${base} x ${i} = ${base*i}\n`;
        }
        
        if(listar){
            console.log("===========".green);
            console.log(`Tabla del ${colors.blue(base)}`.green);
            console.log("===========".green);
            console.log(salida);
        }
    
        // fs.writeFile( `table-${ base }.txt`,salida, (err) =>  {
        //     if (err) throw err;
        //     console.log(`table-${ base }.txt creada`);
        // });
        fs.writeFileSync(`./salida/table-${ base }.txt`,salidaToFile);
        return `table-${ base }.txt`;
    } catch (error) {
        throw(error)
    }
    // console.log(`table-${ base }.txt creada`);

}

module.exports = {
    crearArchivo 
}


