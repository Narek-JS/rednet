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
