const pageSetup = (shortUrl = false) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Shorten Url</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </head>
    <body>
    <div class="container">
        
        <div class="row">
            <div class="col-lg-9">
                <h2 class="text-center">Enter Url</h2> 
                <p class="pull-right"><a href="./docs" target="_blank">View Docs</a></p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9">
            <div class="login-form">      
            <div class="form-group">
                <input type="url" id="url" class="form-control" placeholder="url" required="required">
            </div>
            <div class="form-group">
                <button id="shorten-url" class="btn btn-primary btn-block" onclick="shortenUrl()">Shorten Url</button>
            </div>
            <p id="response" class="text-center">${(shortUrl) ? "Your short url is:"+shortUrl : ""}</p>
    </div>
            </div>
        </div>
    </div>
    <script>
        const shortenUrl = () => {
            $("#shorten-url").click(() => {
                const url = $("#url").val();
                if (!url.includes("http") || !url.includes("https")) {
                    alert("E be like say http or https no dey the url wey you drop abeg check am again");
                } else {
                    postUrl(url);
                }
            });
        }

        const postUrl = (url) => {
            $.ajax({
                type: "POST",
                url: "api/shorten",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({
                    long_url: url,
                }),
                success: ()=>{alert("you don shorten "+url);},
                complete: (result) => {
                    const link = window.location.href + result.responseJSON.short_route;
                    $("#response").html("<b>Your short url is <u><a href='" + link + "'>" + link + "</a></u></b>" );
                }
            });
        }
    </script>
    </body>
    </html>`;
}


exports.home = pageSetup;
