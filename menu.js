// Fixed Menu JavaScript - Works properly!
document.addEventListener("DOMContentLoaded", function() {
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  // Safety checks
  if (!openMenu || !closeMenu || !sideMenu || !overlay) {
    console.warn("Menu elements not found");
    return;
  }

  function openSideMenu() {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeSideMenu() {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  // Event listeners
  openMenu.addEventListener("click", openSideMenu);
  closeMenu.addEventListener("click", closeSideMenu);
  overlay.addEventListener("click", closeSideMenu);

  // ESC key to close
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && sideMenu.classList.contains("open")) {
      closeSideMenu();
    }
  });
});
