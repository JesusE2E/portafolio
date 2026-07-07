const params = new URLSearchParams(window.location.search);
const pdf = params.get("pdf");

const documentos = {
    netflix: "/portafolio/static/pdf/stnt.pdf"

};




if (pdf && documentos[pdf]) {
    document.querySelector("#miModal iframe").src = documentos[pdf];
    document.getElementById("miModal").style.display = "block";
}
  
  

  function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
  }


