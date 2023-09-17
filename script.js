function playVideo(objectionNumber) {
    const iframeElement = document.getElementById("trainingIframe");
    let youtubeLink = "";

    // Based on objection number, set YouTube link.
    switch (objectionNumber) {
        case 1:
            youtubeLink = "https://www.youtube.com/embed/z5RB6-Ik3dM?si=wWc6YwEwInduy53Z";
            break;
        case 2:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_2";
            break;
        case 3:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_3";
            break;
        case 4:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_4";
            break;
        case 5:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_5";
            break;
        case 6:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_6";
            break;
        case 7:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_7";
            break;
        case 8:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_8";
            break;
        case 9:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_9";
            break;
        case 10:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_10";
            break;
        case 11:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_11";
            break;
        case 12:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_12";
            break;
        case 13:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_13";
            break;
        case 14:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_14";
            break;
        case 15:
            youtubeLink = "https://www.youtube.com/embed/VIDEO_ID_15";
            break;
    }

    iframeElement.src = youtubeLink;  // Set the YouTube link

    // Display the iframe container.
    document.querySelector(".video-container").style.display = "block";
}
