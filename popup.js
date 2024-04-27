chrome.tabs.query({}, function (tabs) {
  var tabsList = document.getElementById("tabsList");
  tabs.forEach(function (tab) {
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.textContent = tab.url;
    anchor.href = tab.url;
    anchor.setAttribute("target", "_blank");
    li.appendChild(anchor);
    tabsList.appendChild(li);
  });
});

document.querySelector(".loadTabs").addEventListener("click", () => {});
