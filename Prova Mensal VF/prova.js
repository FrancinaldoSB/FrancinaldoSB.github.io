


function getProfileInfosGitHub(){
    
    
    const filme = document.getElementById('txtBusca').value;
    const url = `http://www.omdbapi.com/?t=${filme}&apikey=790af7bc`  
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.Writer != undefined) {
            texth1.textContent = data.Title
            runtime.textContent = data.Runtime
            year.textContent = data.Year
            textp1.textContent = data.Genre
            textplot.textContent = data.Plot
            textwriter.textContent = "Escrito por: " + data.Writer
            textdirector.textContent = "Dirigido por: " + data.Director
            notafilme.textContent = data.imdbRating
            document.getElementById('img').style.backgroundImage = `url(${data.Poster})`
        } else {
            texth1.textContent = "Não Foi Encontrado!!"
       
            runtime.textContent = ""
            year.textContent = ""
            textp1.textContent = ""
            textplot.textContent = ""
            textwriter.textContent = "" 
            textdirector.textContent = ""
            notafilme.textContent = ""
            document.getElementById('img').style.backgroundImage = `url(fundo.jpg)`
        }

     })     


}


