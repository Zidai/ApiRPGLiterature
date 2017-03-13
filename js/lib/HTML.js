var HTML=(function(){
    var _h1=function ( _textContent){
        var _e=document.createElement("h1");
        if(_textContent !==undefined){
            _e.textContent=_textContent;
        }
        return _e;
    };
    var _h4 = function(_textContent, _atributos){
        var _e = document.createElement("h4");
        if(_textContent !== undefined){
            _e.textContent = _textContent;
        }
        
        for(var llave in _atributos){
            _e.setAttribute(llave, _atributos[llave]);
        }
        
        return _e;
    };
    var _h5 = function(_textContent, _atributos){
        var _e = document.createElement("h5");
        if(_textContent !== undefined){
            _e.textContent = _textContent;
        }
        
        for(var llave in _atributos){
            _e.setAttribute(llave, _atributos[llave]);
        }
        
        return _e;
    };
    var _img=function(_src, _atributos){
        var _e=document.createElement("img");
        if(_src !==undefined){
            _e.setAttribute("src",_src);
        }
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _ul=function(_atributos){
        var _e=document.createElement("ul");
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _li=function(_textContent,_atributos){
        var _e=document.createElement("li");
        if(_textContent !==undefined){
            _e.textContent=_textContent;
        }
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _table=function(_atributos){
        var _e=document.createElement("table");
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _thead=function(_atributos){
        var _e=document.createElement("thead");
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _tbody=function(_atributos){
        var _e=document.createElement("tbody");
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _tr=function(_atributos){
        var _e=document.createElement("tr");
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _th=function(_textContent,_atributos){
        var _e=document.createElement("th");
        if(_textContent !==undefined){
            _e.textContent=_textContent;
        }
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _td=function(_textContent,_atributos){
        var _e=document.createElement("td");
        if(_textContent !==undefined){
            _e.textContent=_textContent;
        }
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _button=function (_textContent,_atributos) {
        var _e=document.createElement("button");
        if(_textContent !== undefined){
            _e.textContent = _textContent;
        }
        for (var llave in _atributos){
            _e.setAttribute(llave, _atributos[llave]);
        }
        return _e;
    }
    var _a=function (_textContent,_atributos) {
        var _e=document.createElement("a");
        if(_textContent !== undefined){
            _e.textContent = _textContent;
        }
        for (var llave in _atributos){
            _e.setAttribute(llave, _atributos[llave]);
        }
        return _e;
    }
    var _div=function(_atributos){
        var _e=document.createElement("div");
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave]);
        }
        return _e;
    }
    var _span=function (_atributos) {
         var _e= document.createElement("span");
           for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave])
        }
        return _e;
    }
    var _input=function(_textContent,_atributos){
        var _e= document.createElement("input");
        if (_textContent!==undefined){
            _e.textContent=_textContent;
        }
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave])
        }
        return _e;
    };
    var _label=function (_textContent,_atributos) {
         var _e= document.createElement("label");
        if (_textContent!==undefined){
            _e.textContent=_textContent;
        }
        for (var llave in _atributos){
            _e.setAttribute(llave,_atributos[llave])
        }
        return _e;
    }
    var _form = function(_accion, _nombre/*, _elementos*/){
        var _e = document.createElement("form");
        if((_accion !== undefined) && (_nombre !== undefined)){
            _e.setAttribute("action", _accion);
            _e.setAttribute("name", _nombre);
        }
        /*
        if(_elementos !== undefined){
            for(var i = 0; i < _elementos.length; i++){
                _e.appendChild(_elementos[i]);   
            }    
        }
        */
        _e.setAttribute("method", "POST");
        
        return _e; 
    };
    return{
        "h1": _h1,
        "img": _img,
        "ul": _ul,
        "li": _li,
        "table": _table,
        "thead": _thead,
        "tbody": _tbody,
        "tr": _tr,
        "th": _th,
        "td": _td,
        "button": _button,
        "div": _div,
        "span": _span,
        "a": _a,
        "label":_label,
        "h5": _h5,
        "h4": _h4,
        "input":_input,
        "form": _form,     
    };
})();