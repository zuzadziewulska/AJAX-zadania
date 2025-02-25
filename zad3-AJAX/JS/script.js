$(document).ready(function(){
    
    $('#get-data').click(function(){
        
        // poprzez funkcję GET
        $.get('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let puserId = $('<p></p>').text(`User ID: ${data.userId}`);
            let pBody = $('<p></p>').text(`Body: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');

            jqBody.append(pId);
            jqBody.append(puserId);
            jqBody.append(pTitle);
            jqBody.append(pBody)
            jqBody.append(hr);
        })

        .fail(function(error) {
            console.error(error);
        })


        //poprzez funkcję GET JSON

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let puserId = $('<p></p>').text(`User ID: ${data.userId}`);
            let pBody = $('<p></p>').text(`Body: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');

            jqBody.append(pId);
            jqBody.append(puserId);
            jqBody.append(pTitle);
            jqBody.append(pBody)
            jqBody.append(hr);
        })

        .fail(function(error) {
            console.error(error);
        })
    })
})