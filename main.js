document.getElementById("phishingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    // Substitua abaixo pela URL do seu Apps Script publicado
    const scriptURL = "https://script.google.com/macros/s/AKfycbzBkJ8YjHr8sk7MjSykLDoGQxgRKiOAq8P_srBF97Uxd7MXqWx6XhafXFQYJ5oZyuGoPQ/exec";

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
