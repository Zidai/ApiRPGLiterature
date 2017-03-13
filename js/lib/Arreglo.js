var Arreglo =(function(){
    //
    var _a_cada_uno = function(f,arrIn){
        for(var i=0;i<arrIn.length;i++){
            f(arrIn[i]);
        }
    };
    //filtrar
    var _filtrar_a = function(f, arr_entrada){
        var arr_salida =[];
        for (var i=0;i<arr_entrada.length;i++){
            if(f(arr_entrada[i])){
                arr_salida.push(arr_entrada[i]);
            };
        };
    return arr_salida;
    };
    //Map
    var _aplicar_a_cada_uno = function(f,arr_entrada){
        var arr_salida=[];
        for (var i=0;i<arr_entrada.length;i++){
            arr_salida[i]=f(arr_entrada[i]);
        }
        return arr_salida;
    };
    
    // Reduce
    var _reducir_con =function(valor_inicial,g,arr_entrada){
        var valor_final=valor_inicial;
        for (var i=0;i<arr_entrada.length;i++){
            valor_final=g(valor_final,arr_entrada[i]);
        }
        return valor_final;

    };
    
    return{
        'a_cada_uno': _a_cada_uno,
        'filtrar_a': _filtrar_a,
        'aplicar_a_cada_uno': _aplicar_a_cada_uno,
        'reducir_con': _reducir_con
    };
})();