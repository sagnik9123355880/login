function takePicture() {
    const scanResult = document.getElementById("scan-result");
    scanResult.style.color = "black";
    scanResult.textContent = "Processing...";

    setTimeout(() => {
        const isCriminal = Math.random() < 0.5;

        if (isCriminal) {
            scanResult.style.color = "red";
            scanResult.textContent = "Alert: Criminal detected!";
        } else {
            scanResult.style.color = "green";
            scanResult.textContent = "Identity verified: No criminal record found.";
        }
    }, 3000);

}
{
// Access the camera and display the live feed
async function startCamera() {
    const video = document.getElementById("camera-stream");
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error("Error accessing the camera:", error);
        document.getElementById("scan-result").textContent = "Unable to access camera.";
    }
}

// Take a picture from the video feed and display it on the canvas
function takePicture() {
    const video = document.getElementById("camera-stream");
    const canvas = document.getElementById("snapshot");
    const scanResult = document.getElementById("scan-result");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = "block";  // Show the captured image

    scanResult.style.color = "black";
    scanResult.textContent = "Processing...";

    setTimeout(() => {
        const isCriminal = Math.random() < 0.5;

        if (isCriminal) {
            scanResult.style.color = "red";
            scanResult.textContent = "Alert: Criminal detected!";
        } else {
            scanResult.style.color = "green";
            scanResult.textContent = "Identity verified: No criminal record found.";
        }
    }, 3000);
}

// Start the camera when the page loads
window.onload = startCamera;

}
