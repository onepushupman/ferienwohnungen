// Changes Favicon based on system settings
matcher = window.matchMedia("(prefers-color-scheme: dark)");
matcher.addListener(onUpdate);
onUpdate();

lightSchemeIcon = document.querySelector("#light-scheme-icon");
darkSchemeIcon = document.querySelector("#dark-scheme-icon");

function onUpdate() {
  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}

// export default favicon
