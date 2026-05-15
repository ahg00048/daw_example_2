<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css" integrity="sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="resources/css/mainStyle.css">
</head>
<body>
<main class="container-fluid text-light bg-dark pt-5">
    <ul id="chat" class="container rounded-2 bg-secondary">

    </ul>
</main>
<footer class="container-fluid text-light bg-dark">
    <div id="chat-input" class="container input-group py-5">
        <input type="text" id="text-input" class="form-control text-light bg-secondary" placeholder="" aria-label="" aria-describedby="basic-addon1">
        <div class="input-group-prepend">
            <button id="send-button" class="btn text-light btn-outline-secondary" type="button">Send</button>
        </div>
    </div>
</footer>
</body>
<script src="resources/js/index.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js" integrity="sha512-EKWWs1ZcA2ZY9lbLISPz8aGR2+L7JVYqBAYTq5AXgBkSjRSuQEGqWx8R1zAX16KdXPaCjOCaKE8MCpU0wcHlHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</html>