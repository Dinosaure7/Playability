function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;

  // Tronquer à la longueur max
  let truncated = text.substring(0, maxLength);

  // Trouver la dernière position d'un espace pour s'assurer de ne pas couper un mot
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  if (lastSpaceIndex > 0) {
    truncated = truncated.substring(0, lastSpaceIndex);
  }

  // Si la troncation se termine par un point, on ajoute seulement deux points
  if (truncated.endsWith(".")) {
    return truncated + "..";
  }

  return truncated + "...";
}

export default truncateText;
