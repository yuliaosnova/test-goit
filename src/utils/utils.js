// returns a comma-separated number
export function formatQuantity(quantity) {
  const quantityToString = String(quantity);
  if (quantityToString.length <= 3) return quantityToString;

  let space = 0;
  let number = "";

  for (let i = quantityToString.length - 1; i >= 0; i--) {
    if (space === 3) {
      number = "," + number;
      space = 0;
    }
    number = quantityToString.charAt(i) + number;
    space++;
  }
  return number;
}

// Press footer to the bottom
function footer() {
  const main = document.getElementsByTagName("main")[0];
  const footer = document.getElementsByTagName("footer")[0];

  main.style.paddingBottom = footer.clientHeight + "px";
}

window.addEventListener("load", footer);
window.addEventListener("resize", footer);
