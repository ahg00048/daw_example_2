package es.ujaen.red.ahg00048.ejemplo_2.rest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/client")
@Produces(MediaType.TEXT_PLAIN)
public class ChatCliendId {
    private static int curr_client_id = 0;

    @GET
    public String getClientId() {
        return String.valueOf(curr_client_id++);
    }
}
