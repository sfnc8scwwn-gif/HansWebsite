// ============================================================
// Renders wildlifeStories (from wildlife-data.js) onto
// wildlife.html using the shared renderStoryList() in main.js
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  if (typeof wildlifeStories === "undefined") return;
  renderStoryList("story-list", "story-guide", wildlifeStories, {
    guideLabel: "Jump to a photo",
  });
});
