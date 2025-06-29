export const cutEmail = (email: string, length: number = 10): string => {
  if (email.length <= length) {
    return email;
  }

  const [emailNamePart, emailHostPart] = email.split("@");

  const surplusCharacterCount = emailNamePart.length - length;
  const trimmedSurplusEmailLen = emailNamePart.length - surplusCharacterCount;

  return emailNamePart.slice(0, trimmedSurplusEmailLen) + "..@" + emailHostPart;
};

export const cutWordToEtc = (word: string, length: number): string => {
  if (word.length <= length) {
    return word;
  }

  const slicedWord = word.slice(0, length);
  return slicedWord + "..";
};

export const cutFileName = (
  fileName: string,
  maxNameLength: number = 10
): string => {
  const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".svg"];
  const dotIndex = fileName.lastIndexOf(".");

  if (dotIndex === -1) return fileName;

  const name = fileName.slice(0, dotIndex);
  const ext = fileName.slice(dotIndex);

  if (
    !allowedExtensions.includes(ext.toLowerCase()) ||
    name.length <= maxNameLength
  ) {
    return fileName;
  }

  return name.slice(0, maxNameLength) + ".." + ext;
};
