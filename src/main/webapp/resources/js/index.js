const chat = document.getElementById("chat");
const text_input = document.getElementById("text-input");
const button = document.getElementById("send-button");

let client_id = "";

async function getClientId() {
    resp = await fetch("http://localhost:8080/Ejemplo_2-1.0-SNAPSHOT/api/client");
    client_id = await resp.text();
}

getClientId();

setTimeout(createSocket, 1000)

let socket = null;

function createSocket() {
    socket = new WebSocket("ws://localhost:8080/Ejemplo_2-1.0-SNAPSHOT/chat");
    socket.onopen = () => { socket.send("cliente " + client_id + " se ha conectado.") }
    socket.onmessage = (e) => { obtainMessage(e.data)}
}

window.onbeforeunload = () => { socket.send("cliente " + client_id + " se ha desconectado.") }

function obtainMessage(msg) {
    const list_item = document.createElement("li");

    list_item.innerText = msg;
    let firstChild = chat.firstChild;
    chat.insertBefore(list_item, firstChild);

    if (chat.childElementCount > 30) {
        let lastChild = chat.lastElementChild;
        chat.removeChild(lastChild);
    }
}

function sendMessage() {
    if (text_input.value === "") return;

    const msg = client_id + ": " + text_input.value;

    socket.send(msg);
}

button.addEventListener("click", sendMessage);
text_input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});