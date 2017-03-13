var Pure = (function(){
    return{
        "Button": undefined,
        "Table": undefined,
        "Div": undefined,
        "H": undefined,
        "P": undefined,
        "Img": undefined
    }
})();

Pure.Button = (function(){
    var _default = function(_textContent){
        return HTML.button(_textContent, {
           "class": "pure-button" 
        });
    };   
    var _primary = function(_textContent){
        return HTML.button(_textContent, {
           "class": "pure-button pure-button-primary" 
        });
    };
    var _success = function(_textContent){
        return HTML.button(_textContent, {
           "class": "pure-button button-success" 
        });
    };
    return{
        "default": _default,
        "primary": _primary,
        "success": _success
    }
})();

Pure.Table = (function () {
    var _default = function(_id){
      return HTML.table(_id, {
          "class": "pure-table"
      });  
    };
    var _bordered = function(_id){
      return HTML.table(_id, {
          "class": "pure-table pure-table-bordered"
      });  
    };
    return{
        "default": _default,
        "bordered": _bordered
    }
})();

Pure.Div = (function(){
    var _ul = function(_atributos){
        var _e = HTML.div(_atributos);
        _e.setAttribute("class", "pure-u-l");
        return _e;
    };
    var _g = function(_atributos){
        var _e = HTML.div(_atributos);
        _e.setAttribute("class", "email-item email-item-unread pure-g");
        return _e;
    };
    var _u = function(_atributos){
        var _e = HTML.div(_atributos);
        _e.setAttribute("class", "pure-u");
        return _e;
    };
    var _u34 = function(_atributos){
        var _e = HTML.div(_atributos);
        _e.setAttribute("class", "pure-u-3-4");
        return _e;
    };
    return{
        "ul": _ul,
        "g": _g,
        "u": _u,
        "u34": _u34
    };
})();

Pure.H = (function(){
    var _subject = function(_textContent, _atributos){
        var _e = HTML.h4(_textContent, _atributos);
        _e.setAttribute("class", "email-subject");
        return _e;
    };
    var _name = function(_textContent, _atributos){
        var _e = HTML.li(_textContent, _atributos);
        _e.setAttribute("class", "email-name");
        return _e;
    };
    return{
        "subject": _subject,
        "name": _name
    };
})();

Pure.P = (function(){
    var _desc = function(_textContent, _atributos){
        var _e = HTML.p(_textContent, _atributos);
        _e.setAttribute("class", "email-desc");
        return _e;
    }; 
    return{
        "desc": _desc
    };
})();

Pure.Img = (function(){
    var _avatar = function(_src, _atributos){
        var _e = HTML.img(_src, _atributos);
        var _estilo = {"class": "email-avatar", "alt": "Reid Burke&#x27;s avatar", "height": "64", "width": "64"}
        for(var llave in _estilo){
            _e.setAttribute(llave, _estilo[llave]);
        }
        return _e;
    };
    return{
        "avatar": _avatar
    };
})();