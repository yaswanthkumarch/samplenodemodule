document.getElementById('callHttpTrigger').addEventListener('click', async () => {
    try {
        const response = await fetch('https://triger4wbapp.azurewebsites.net/api/HttpTrigger1?code=npPS_FeDHQ6_GFO2dZA0436j8SVxRj4187rwcLIw2ASXAzFuCmy2qQ%3D%3D');
        const data = await response.json();
        document.getElementById('httpResult').innerText = `HTTP Trigger Response: ${data.message}`;
    } catch (error) {
        document.getElementById('httpResult').innerText = `Error: ${error.message}`;
    }
});

document.getElementById('callTimerTrigger').addEventListener('click', async () => {
    // Timer triggers cannot be called directly; this is just a placeholder.
    document.getElementById('timerResult').innerText = 'Timer trigger runs on a schedule and cannot be called directly.';
});

document.getElementById('callBlobTrigger').addEventListener('click', async () => {
    // This should ideally call a function that processes a blob; this is a placeholder.
    document.getElementById('blobResult').innerText = 'Blob trigger runs when a blob is added to the container and cannot be called directly.';
});
