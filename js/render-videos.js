// ============================================================
// Renders previousVideos (from video-data.js) onto
// projects/video-shorts.html using the shared
// renderStoryList() in main.js
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  if (typeof previousVideos === "undefined") return;
  renderStoryList("story-list", "story-guide", previousVideos, {
    isVideo: true,
    watchText: "Watch this video",
    guideLabel: "Jump to a video",
  });
});
