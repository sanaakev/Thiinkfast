
document.getElementById("clearData").addEventListener("click", () => {
  chrome.storage.local.clear(() => {
    alert("All personalized learning data has been cleared.");
  });
});
