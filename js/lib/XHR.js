var XHR=(function () {
    var _detectar_cambios_de_estado=function(_xhr,_encaso_de_exito,_en_caso_de_error){
        return function(){
            if (_xhr.readyState === 4){
                if(_xhr.status >=200 && _xhr.status<=299){
                    _encaso_de_exito(_xhr)
                }
                else{
                    _en_caso_de_error(_xhr)
                }
            }
        };
    };
    
    var _get=function (_url,_encaso_de_exito,_en_caso_de_error) {
        var xhr=new XMLHttpRequest();
        xhr.open("GET",_url,true);
        xhr.onreadystatechange = _detectar_cambios_de_estado(xhr,_encaso_de_exito,_en_caso_de_error);
        xhr.send();
    }
    
    return{
        "get":_get
    }
})();


/**
 * Investigar FUNCIONES HTTP
 * .GET
 * .HEADER
 * .OPTIONS
 * .POST
 * .PUT
 * .DELETE
 * **/