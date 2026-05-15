const chat = document.getElementById("chat");
const text_input = document.getElementById("text-input");
const button = document.getElementById("send-button");

let client_id = "";

async function getClientId() {
    resp = await fetch("http://localhost:8080/Ejemplo_2-1.0-SNAPSHOT/api/client");
    client_id = await resp.text();
}

getClientId();

const socket = new WebSocket("ws://localhost:8080/Ejemplo_2-1.0-SNAPSHOT/chat");
socket.onmessage = (e) => { obtainMessage(e.data)}

function obtainMessage(msg) {
    const list_item = document.createElement("li");
    if (msg.includes(client_id)) {
        msg = msg.replace(client_id, "you");
    }

    list_item.innerText = msg;
    chat.appendChild(list_item);

    if (chat.childElementCount > 30) {
        let firstChild = chat.firstElementChild;
        chat.removeChild(firstChild);
    }
}

function sendMessage() {
    if (text_input.value === "") return;

    const msg = client_id + " : " + text_input.value;

    socket.send(msg);
}

button.addEventListener("click", sendMessage);
text_input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});