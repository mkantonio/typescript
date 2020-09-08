(function () {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }
    
    const { nombre, clave, poder } = avenger;
    console.log( nombre );
    console.log( clave );
    console.log( poder );

    
    const extraer = ( {nombre, poder}: any ) =>{
        console.log( nombre );
        console.log( poder );
    }

    const avengers2: string[] = ['Thor', 'Ironman', 'Spiderman', 'liebre'];
    const [loki, hombre, , animal] = avengers2;

    console.log( loki );
    console.log( hombre );
    console.log( animal );

    const extraerArr = ( [thor, ironman, spiderman]: string[] ) =>{
        console.log( thor );
        console.log( ironman );
        console.log( spiderman );
    }
    extraerArr( avengers2 );


})();
