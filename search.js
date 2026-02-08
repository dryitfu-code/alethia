// Enhanced search functionality for filtering articles
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const newsGrid = document.getElementById("newsGrid");
  const noResults = document.getElementById("noResults");

  if (!searchInput || !newsGrid) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const articles = newsGrid.querySelectorAll(".news-card");
    let visibleCount = 0;

    articles.forEach(article => {
      // Get searchable content from multiple sources
      const title = article.querySelector("h3")?.textContent.toLowerCase() || "";
      const description = article.querySelector("p")?.textContent.toLowerCase() || "";
      const keywords = article.getAttribute("data-keywords")?.toLowerCase() || "";
      
      // Get source links if they exist
      const sourceLink = article.querySelector(".source-link")?.textContent.toLowerCase() || "";
      
      // Get alt text from images
      const imgAlt = article.querySelector("img")?.alt.toLowerCase() || "";
      
      // Combine all searchable text
      const searchableText = `${title} ${description} ${keywords} ${sourceLink} ${imgAlt}`;
      
      // Show/hide based on match
      if (query === "" || searchableText.includes(query)) {
        article.style.display = "";
        visibleCount++;
      } else {
        article.style.display = "none";
      }
    });

    // Show/hide "no results" message
    if (noResults) {
      noResults.style.display = visibleCount === 0 && query !== "" ? "block" : "none";
    }
  });

  // Clear search on Escape key
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = "";
      searchInput.dispatchEvent(new Event("input"));
      searchInput.blur();
    }
  });

  // Optional: Focus search with Ctrl/Cmd + K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchInput.focus();
    }
  });
});
