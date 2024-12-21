function showInfo(aircraft) {
    const infoSection = document.getElementById("info");
    const videoContainer = document.getElementById("videoContainer");
    const aircraftVideo = document.getElementById("aircraftVideo");
    let infoText = "";
    let videoUrl = ""; // URL for the relevant YouTube video

    // Update the info section
    if (aircraft === "Fighter Jet") {
        infoText = "Zion's Fighter jets are fast and powerful aircraft used in combat!";
        videoUrl = "https://www.youtube.com/embed/zW28Mb1YvwY"; // Fighter Jet video
    } else if (aircraft === "Passenger Plane") {
        infoText = "Zion's Passenger planes carry people around the world comfortably.";
        videoUrl = "https://www.youtube.com/embed/ExAEDQ26HTE"; // Passenger Plane video
    } else if (aircraft === "Helicopter") {
        infoText = "Zion's Helicopters can hover and land in tight spaces. They're very versatile!";
        videoUrl = "https://www.youtube.com/embed/g90QUoORmc0"; // Helicopter video
    }

    // Update the info section
    infoSection.innerHTML = `<h2>${aircraft}</h2><p>${infoText}</p>`;

    // Show and update the video container if a URL is provided
    if (videoUrl) {
        aircraftVideo.src = videoUrl;
        videoContainer.style.display = "block";
    } else {
        videoContainer.style.display = "none"; // Hide video container if no URL
    }
}