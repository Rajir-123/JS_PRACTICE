//GET:


// ----------------------------


function getCall() {
    // 1. create a XML Request Object
    var http = new XMLHttpRequest()

    // 2. Open the url (declare)
    http.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true)

    // 3. set required headers
    http.setRequestHeader("content-type", "application/json; charset=UTF-8")
    // 4. set body
    // var requestBody = {
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1
    // }
    // In backend:
    /*
        consumption:
        request.body
    */

    http.onreadystatechange = function () {//Call a function when the ready state changes.
        if (http.readyState == 4 && http.status == 200) {
            try {
                this.responseText = JSON.stringify(this.responseText)
            } catch (exception) {
                console.log("Parsing issue: ", exception)
            }
            if (this.responseText != null && this.responseText != "") {
                var _div = document.createElement('div')
                _div.innerHTML = this.responseText;

                document.getElementById('data').append(_div.innerHTML);
                console.log(this.responseText);
            }
        }
    }

    http.send();

}


//POST:


// ----------------------------


function postCall() {
    // 1. create a XML Request Object
    var http = new XMLHttpRequest()

    // 2. Open the url (declare)
    http.open("POST", "https://jsonplaceholder.typicode.com/posts", true)

    // 3. set required headers
    http.setRequestHeader("content-type", "application/json; charset=UTF-8")
    // 4. set body
    var requestBody = {
        title: 'foo',
        body: 'bar',
        userId: 1
    }
    // In backend:
    /*
        consumption:
        request.body
    */

    http.onreadystatechange = function () {//Call a function when the ready state changes.
        if (http.readyState == 4 && http.status == 201) {
            try {
                this.responseText = JSON.stringify(this.responseText)
            } catch (exception) {
                console.log("Parsing issue: ", exception)
            }
            if (this.responseText != null && this.responseText != "") {
                var _div = document.createElement('div')
                _div.innerHTML = this.responseText;

                document.getElementById('data').append(_div.innerHTML);
                console.log(this.responseText);
            }
        }
    }

    http.send(JSON.stringify(requestBody));

}

//PUT:


// ----------------------------


function putCall() {
    // 1. create a XML Request Object
    var http = new XMLHttpRequest()

    // 2. Open the url (declare)
    http.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true)

    // 3. set required headers
    http.setRequestHeader("content-type", "application/json; charset=UTF-8")
    // 4. set body
    var requestBody = {
        title: 'example',
        body: 'test',
        userId: 2
    }
    // In backend:
    /*
        consumption:
        request.body
    */

    http.onreadystatechange = function () {//Call a function when the ready state changes.
        if (http.readyState == 4 && http.status == 200) {
            try {
                this.responseText = JSON.stringify(this.responseText)
            } catch (exception) {
                console.log("Parsing issue: ", exception)
            }
            if (this.responseText != null && this.responseText != "") {
                var _div = document.createElement('div')
                _div.innerHTML = this.responseText;

                document.getElementById('data').append(_div.innerHTML);
                console.log(this.responseText);
            }
        }
    }

    http.send(JSON.stringify(requestBody));

}


//DELETE:


// ----------------------------


function deleteCall() {
    // 1. create a XML Request Object
    var http = new XMLHttpRequest()

    // 2. Open the url (declare)
    http.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true)

    // 3. set required headers
    http.setRequestHeader("content-type", "application/json; charset=UTF-8")
    // 4. set body
    // var requestBody = {
    //     title: 'example',
    //     body: 'test',
    //     userId: 2
    // }
    // In backend:
    /*
        consumption:
        request.body
    */

    http.onreadystatechange = function () {//Call a function when the ready state changes.
        if (http.readyState == 4 && http.status == 200) {
            try {
                this.responseText = JSON.stringify(this.responseText)
            } catch (exception) {
                console.log("Parsing issue: ", exception)
            }
            if (this.responseText != null && this.responseText != "") {
                var _div = document.createElement('div')
                _div.innerHTML = this.responseText;

                document.getElementById('data').append(_div.innerHTML);
                console.log(this.responseText);
            }
        }
    }

    http.send();

}

//PATCH:--->Access to XMLHttpRequest at 'https://jsonplaceholder.typicode.com/posts/3' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: Method PATCH is not allowed by Access-Control-Allow-Methods in preflight response.


// ----------------------------


function patchCall() {
    // 1. create a XML Request Object
    var http = new XMLHttpRequest()

    // 2. Open the url (declare)
    http.open("PATCH", "https://jsonplaceholder.typicode.com/posts/3", true)

    // 3. set required headers
    http.setRequestHeader("content-type", "application/json; charset=UTF-8")
    // 4. set body
    var requestBody = {
        title: 'exampleData',
        body: 'testData',
        userId: 3
    }
    // In backend:
    /*
        consumption:
        request.body
    */

    http.onreadystatechange = function () {//Call a function when the ready state changes.
        if (http.readyState == 4 && http.status == 200) {
            try {
                this.responseText = JSON.stringify(this.responseText)
            } catch (exception) {
                console.log("Parsing issue: ", exception)
            }
            if (this.responseText != null && this.responseText != "") {
                var _div = document.createElement('div')
                _div.innerHTML = this.responseText;

                document.getElementById('data').append(_div.innerHTML);
                console.log(this.responseText);
            }
        }
    }

    http.send(JSON.stringify(requestBody));

}












