// ── Spline logo removal ──────────────────────────────────────
function removeSplineLogo() {
  const viewer = document.querySelector("spline-viewer");
  if (viewer && viewer.shadowRoot) {
    const logo = viewer.shadowRoot.querySelector("#logo");
    if (logo) {
      logo.remove();
      return true;
    }
  }
  return false;
}

const logoInterval = setInterval(() => {
  if (removeSplineLogo()) clearInterval(logoInterval);
}, 500);

// ── Spline load timing ───────────────────────────────────────
// FIX: t0 starts here (when the page is interactive),
// not before the custom element is even defined.
// The listener is attached immediately — spline-viewer.js
// loaded first so the element is already registered.
