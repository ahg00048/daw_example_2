package es.ujaen.red.ahg00048.ejemplo_2.websockets;

import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.logging.Level;
import java.util.logging.Logger;

@ServerEndpoint("/chat")
public class ChatEndPoint {
    private static int curr_id = 0;
    private static final int MAX_MESSAGES = 30;
    private static final ConcurrentLinkedDeque<String> _messages = new ConcurrentLinkedDeque<>();

    @OnOpen
    public void onOpen(Session session) {
        try {
            for (String msg : _messages) {
                session.getBasicRemote().sendText(msg);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @OnMessage
    public void onMessage(Session session, String msg) {
        try {
            _messages.add(msg);

            if (_messages.size() > MAX_MESSAGES) _messages.removeFirst();

            for (Session sess : session.getOpenSessions()) {
                if (sess.isOpen()) {
                    sess.getBasicRemote().sendText(msg);
                }
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
