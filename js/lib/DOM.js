var DOM = (function() {
    var _id_append = function (id_del_elemento, arr_hijos) {
        var _padres = _id(id_del_elemento);
        for(var i = 0; i < arr_hijos.length; i++){
            _padres[0].appendChild(arr_hijos[i]);
        }
    };
    var _id_click = function (id_del_elemento, _continuacion) {
        var _elementos = _id(id_del_elemento);
        for(var i = 0; i < _elementos.length; i++){
            _elementos[i].addEventListener("click", _continuacion, false);
        }
    };   
    var _class_append = function(clase_de_los_elementos, arr_hijos){
        var _padres = _class(clase_de_los_elementos);
        for(var i = 0; i < arr_hijos.length; i++){
            _padres[0].appendChild(arr_hijos[i]);
        }
    };
    var _id_append_thead = function(id_del_elemento, arr_hijos){
        var _tabla = _id(id_del_elemento);
        var _tr = document.createElement("tr");
        for(var i = 0; i < arr_hijos.length; i++){
            var _th = document.createElement("th");
            //_th.setAttribute("textContent", arr_hijos[i]);
            _th.textContent = arr_hijos[i];
            _tr.appendChild(_th);
        }
        _tabla[0].children[0].appendChild(_tr);
    };
    var _id_append_tbody = function(id_del_elemento, arr_hijos){
        var _tabla = _id(id_del_elemento);
        var _tr = document.createElement("tr");
        for(var i = 0; i < arr_hijos.length; i++){
            var _td = document.createElement("td");
            //_td.setAttribute("textContent", arr_hijos[i]);
            _td.textContent = arr_hijos[i]
            _tr.appendChild(_td);
        }
        _tabla[0].children[1].appendChild(_tr);
    };
    var _id = function(id_del_elemento) {
        var _arr_salida = [];
        var _elemento = document.getElementById(id_del_elemento);
        if (_elemento === null) {
            return _arr_salida;
        }
        _arr_salida.push(_elemento);
        return _arr_salida;
    };
    var _tag = function(etiqueta_de_los_elementos) {
        var _arr_salida = [];
        var _elementos = document.getElementsByTagName(etiqueta_de_los_elementos);
        if (_elementos.length === 0) {
            return _arr_salida;
        }
        for (var i = 0; i < _elementos.length; i++) {
            _arr_salida.push(_elementos[i]);
        }
        return _arr_salida;
    }
    var _class = function(clase_de_los_elementos) {
        var _arr_salida = [];
        var _elementos = document.getElementsByClassName(clase_de_los_elementos);
        if (_elementos.length === 0) {
            return _arr_salida;
        }
        for (var i = 0; i < _elementos.length; i++) {
            _arr_salida.push(_elementos[i]);
        }
        return _arr_salida;
    }
    var _name = function(nombre_de_los_elementos) {
        var _arr_salida = [];
        var _elementos = document.getElementsByName(nombre_de_los_elementos);
        if (_elementos.length === 0) {
            return _arr_salida;
        }
        for (var i = 0; i < _elementos.length; i++) {
            _arr_salida.push(_elementos[i]);
        }
        return _arr_salida;
    }
    var _id_children = function(id_del_elemento) {
        var _arr_salida = [];
        var _elementos = _id(id_del_elemento);
        if (_elementos.length === 0) {
            return _arr_salida;
        }
        for (var i = 0; i < _elementos.length; i++) {
            var _children = [];
            for (var j = 0; j < _elementos[i].children.length; j++) {
                _children.push(_elementos[i].children[j]);
            }
            _arr_salida.push(_children);
        }
        return _arr_salida;
    };
    var _tag_children = function(etiqueta_de_los_elementos) {
        var _arr_salida = [];
        var _elementos = _tag(etiqueta_de_los_elementos);
        if (_elementos.length === 0) {
            return _arr_salida;
        }
        for (var i = 0; i < _elementos.length; i++) {
            var _children = [];
            for (var j = 0; j < _elementos[i].children.length; j++) {
                _children.push(_elementos[i].children[j]);
            }
            _arr_salida.push(_children);
        }
        return _arr_salida;
    };
    var _id_parent = function(id_del_elemento) {
        var _arr_salida = [];
        var _elementos = _id(id_del_elemento);
        if (_elementos.length === 0) {
            return _arr_salida;
        }
        for (var i = 0; i < _elementos.length; i++) {
            _arr_salida.push(_elementos[i].parentNode);
        }
        return _arr_salida;
    };
    var _tag_parent = function(etiqueta_de_los_elementos) {
        var _arr_salida = [];
        var _elementos = _tag(etiqueta_de_los_elementos);
        if (_elementos.length === 0) {
            return _arr_salida;
        }
        for (var i = 0; i < _elementos.length; i++) {
            _arr_salida.push(_elementos[i].parentNode);
        }
        return _arr_salida;
    };
    var _id_append = function(id_del_elemento, arr_hijos){
      var _padres = _id(id_del_elemento);
      for(var i = 0; i < arr_hijos.length; i++){
          _padres[0].appendChild(arr_hijos[i]);
          
      }  
    };
    return {
        "id": _id,
        "tag": _tag,
        "class": _class,
        "name": _name,
        "id_children": _id_children,
        "tag_children": _tag_children,
        "id_parent": _id_parent,
        "tag_parent": _tag_parent,
        "id_append": _id_append,
        "class_append": _class_append,
        "id_append_thead": _id_append_thead,
        "id_append_tbody": _id_append_tbody,
        "id_click": _id_click   
    };
})();