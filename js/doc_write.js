function displayPara(){
    document.getElementById("test").innerHTML=doc_write()
}

function doc_write(){
    document.write('<p>paragraph</p>');
    document.write('<h1>title</h1>')
}

function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}