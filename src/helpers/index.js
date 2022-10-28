//@flow

// Converts hex color to rgba string
export function hexToRgb(hex: string, opacity: number): string {
  const bigInt = parseInt(
    typeof hex === 'string' ? hex.replace('#', '') : hex,
    16
  );
  const r = (bigInt >> 16) & 255;
  const g = (bigInt >> 8) & 255;
  const b = bigInt & 255;

  return `rgba(${[r, g, b].join(',')}, ${opacity})`;
}

// finds an element parent which has specific tag name
export const findParent = (
  element: HTMLElement | EventTarget,
  parentTag: string
): any => {
  let currentNode = element;
  while (currentNode !== null) {
    if (currentNode.tagName === parentTag) {
      return currentNode;
    }
    if (currentNode.parentNode) currentNode = currentNode.parentNode;
    else currentNode = null;
  }
  return currentNode;
};
