function bookSearch(){
	// ifentificar la busqueda con el Input
	var search =  document.getElementById("search").value
	// eliminar cualquier busqueda anterior
	document.getElementById("results").innerHTML = ""

	// Hacer la peticion al servidor de GOOGLE BOOKS
	$.ajax({
		// URL de la base de datos
	    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
	    dataType: "json",
	    type: 'GET',
	    // En caso de existo hacer...
	    success: function(data) {
	    	//console.log(data)	
		    // Ciclo para recopilar los datos en el JSON del atributo data.items
		     for(var i = 0; i < data.items.length; i++){
		   		// guardar la informacion de los libros
		   		var jdata = data.items[i].volumeInfo
		   		//console.log(data)
		   		// crear los elementos para visualizar en el HTML
		   		var newColSm4 = document.createElement('div')
		   		var newImg = document.createElement('img')
		   		var newTitle = document.createElement('h2')
		   		var newAutor = document.createElement('h3')
		   		var newDate = document.createElement('h4')
				var newRank = document.createElement('h4')
				var newPages = document.createElement('h4')
				var newGenero = document.createElement('h4')
				var newDes = document.createElement('p')
				var newAnchor = document.createElement('a')
		   		// agregar clases a los elementos
		   		newColSm4.className = 'col-sm-12 col-md-8 col-md-offset-2 item'
		   		newAnchor.className = 'btn btn-info'

		   		// agregar texto a los elementos
		   		newTitle.innerText = jdata.title
		   		newAnchor.innerText = 'Seleccionar libro'

		   		// agregar href 
		   		// colocar objetivo
		   		newAnchor.setAttribute('target', '_blank')
				newAnchor.setAttribute('onclick', 'seleccionado(event)')

		   		// obtinene imagen del server de google si no la mia
		   		if(jdata.imageLinks) {
			   		newImg.src = jdata.imageLinks.thumbnail
		   		} else {
			   		newImg.src = '../img/nobook.jpg'
		   		}

		   		// obtiene la fecha de publicacion si no manda mensaje
		   		if(jdata.publishedDate) {
		   			//newDate.innerText = jdata.publishedDate
		   			var date =jdata.publishedDate
		   			var dateOrg=[];
		   			dateOrg=date.split("-")
		   			dateOrg=dateOrg.reverse()
		   			date=dateOrg.join("-")
		   			newDate.innerText= date
		   		} else {
		   			newDate.innerText = 'Fecha no encontrada'
		   		}

		   		// obtiene el autor del libro si no hay manda un mensaje
		   		if(jdata.authors) {
			   		newAutor.innerText = jdata.authors[0];
		   		} else {
			   		newAutor.innerText = 'Autor sin Definir'
		   		}
				
				if(jdata.averageRating) {
					var ranking=jdata.averageRating +" "+"\u2605"
			   		newRank.innerHTML = ranking
		   		} else {
			   		newRank.innerText = 'No tiene un Rating'
		   		}
				
					//
				if(jdata.pageCount) {
					var numPaginas = jdata.pageCount + " paginas"
			   		newPages.innerHTML = numPaginas
		   		} else {
			   		newPages.innerText = 'N'+"\u00FA"+'mero de p'+"\u00E1"+'ginas desconocido';
		   		}
				
				if(jdata.categories) {
			   		newGenero.innerText = jdata.categories[0];
		   		} else {
			   		newGenero.innerText = 'Sin Genero determinado';
		   		}
				
				if(jdata.description) {
			   		newDes.innerText = jdata.description;
		   		} else {
			   		newDes.innerText = 'Sin description';
		   		}
		   		// agrega los elementos al documento de HTML
		   		newColSm4.appendChild(newImg);
				newColSm4.appendChild(newRank);
				newColSm4.appendChild(newTitle);
		   		newColSm4.appendChild(newAutor);
		   		newColSm4.appendChild(newDate);
				newColSm4.appendChild(newPages);
				newColSm4.appendChild(newGenero);
          		//newColSm4.appendChild(newDes);
				//Este va al final
				newColSm4.appendChild(newAnchor);
		   		// agrega el resultado a la pantalla
		   		var results = document.getElementById("results")
		   		results.appendChild(newColSm4)
		    }
	    }
	})
}

document.getElementById('button').addEventListener('click', bookSearch, false)
