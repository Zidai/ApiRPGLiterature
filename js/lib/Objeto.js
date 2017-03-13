var Objeto=(function () {

    var a_cada_uno=function(f, obj_entrada){
        for(var llave in  obj_entrada){
              f(obj_entrada[llave]);
        }
    };
    
    var _fitrar_a=function(f,obj_entrada){
        var obj_salida={};
        for(var llave in obj_entrada){
            if(f(obj_entrada[llave])){
                obj_salida[llave]=obj_entrada[llave];
            }
        }
        return obj_salida;
    };

    var _map=function(f,obj_entrada){
        var obj_salida={};
        for(var llave in obj_entrada){
            obj_salida[llave]=f(obj_entrada[llave]);
        }   
        return obj_salida;
    };

    var _reduce=function(valor_inicial, f, obj_entrada){
        var valor_final=valor_inicial;
        for(var llave in obj_entrada){
            valor_final=f(valor_final,obj_entrada[llave]);
        }
        return valor_final;
    }

    var _keys=function(obj_entrada){
        var arr_salida=[ ];
        for(var llave in obj_entrada){
            arr_salida.push(llave);
        }
        return arr_salida;
    }

    return{
        "a_cada_uno":a_cada_uno ,
        "filtrar_a":_fitrar_a,
        "map":_map,
        "reduce":_reduce,
        "keys":_keys
    };

})();