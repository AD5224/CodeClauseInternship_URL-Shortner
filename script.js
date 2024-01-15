function shortenUrl() {
    var originalUrl = document.getElementById('originalUrl').value;

    
    if (!originalUrl) {
        alert('Please enter a valid URL--->');
        return;
    }

    
    var shortUrl = window.location.href + generateRandomString(6);

    document.getElementById('shortenedUrl').innerText = 'Shortened URL: ' + shortUrl;
}

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
