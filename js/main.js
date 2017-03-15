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
		   		console.log(jdata)
		   		// crear los elementos para visualizar en el HTML
		   		var newColSm4 = document.createElement('div')
		   		var newImg = document.createElement('img')
		   		var newH2 = document.createElement('h2')
		   		var newH3 = document.createElement('h3')
		   		var newH4 = document.createElement('h4')
		   		var newAnchor = document.createElement('a')
		   		
		   		
		   		// agregar clases a los elementos 
		   		newColSm4.className = 'col-sm-12 col-md-8 col-md-offset-2 item'
		   		newAnchor.className = 'btn btn-info'

		   		// agregar texto a los elementos
		   		newH2.innerText = jdata.title
		   		newAnchor.innerText = 'Mas Informacion'

		   		// agregar href
		   		newAnchor.href = jdata.infoLink
		   		// colocar objetivo
		   		newAnchor.setAttribute('target', '_blank')

		   		// obtinene imagen del server de google si no la mia
		   		if(jdata.imageLinks) {
			   		newImg.src = jdata.imageLinks.thumbnail
		   		} else {
			   		newImg.src = '../img/nobook.jpg'
		   		}

		   		// obtiene la fecha de publicacion si no manda mensaje
		   		if(jdata.publishedDate) {
		   			//newH4.innerText = jdata.publishedDate
		   			var date =jdata.publishedDate
		   			var dateOrg=[];
		   			dateOrg=date.split("-")
		   			dateOrg=dateOrg.reverse()
		   			date=dateOrg.join("-")
		   			newH4.innerText= date
		   		} else {
		   			newH4.innerText = 'Fecha no encontrada'
		   		}

		   		// obtiene el autor del libro si no hay manda un mensaje
		   		if(jdata.authors) {
			   		newH3.innerText = jdata.authors[0]
		   		} else {
			   		newH3.innerText = 'Autor sin Definir'
		   		}

		   		// agrega los elementos al documento de HTML
		   		newColSm4.appendChild(newImg)
		   		newColSm4.appendChild(newH2)
		   		newColSm4.appendChild(newH3)
		   		newColSm4.appendChild(newH4)
		   		newColSm4.appendChild(newAnchor)

		   		// agrega el resultado a la pantalla
		   		var results = document.getElementById("results")
		   		results.appendChild(newColSm4)
		    }
	    }
	})
}

document.getElementById('button').addEventListener('click', bookSearch, false)
