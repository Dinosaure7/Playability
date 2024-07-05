function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;

  let truncated = text.substring(0, maxLength);

  const lastSpaceIndex = truncated.lastIndexOf(" ");
  if (lastSpaceIndex > 0) {
    truncated = truncated.substring(0, lastSpaceIndex);
  }

  if (truncated.endsWith(".")) {
    return truncated + "..";
  }

  return truncated + "...";
}

export default truncateText;
