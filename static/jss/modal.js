const params = new URLSearchParams(window.location.search);
const pdf = params.get("pdf");

const documentos = {
    netflix: "/portafolio/static/pdf/stnt.pdf",
    titanic: "/portafolio/static/pdf/titanic.pdf",
    AwsWA: "/portafolio/static/pdf/AwsWA.pdf",
    GITIS: "/portafolio/static/pdf/GITIS.pdf"

};




if (pdf && documentos[pdf]) {
    document.querySelector("#miModal").src = documentos[pdf];
    document.getElementById("miModal").style.display = "block";
}
  
  

  function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
  }


