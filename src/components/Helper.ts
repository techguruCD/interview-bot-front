

export function regexChecker(value: string, regexType: string) {
  const descriptive =
    /^(?!\s$)(?![-/]+$)[a-zA-Z0-9.,-_/'"()!#$%^&+={}[]|:;<>?@ ]+$/;
  const simple = /^[a-zA-Z0-9_]{3,20}$/;
  const number = /^[+\d][\d +-]$/;
  const special = /^(?!\s*$)(?![-/]+$)[a-zA-Z0-9.-/' ]+$/;
  const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const headlineRegex = /^[A-Z][A-Za-z0-9\s,.'-]*\.$/;
  const imageRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|png)/i;

  if (regexType === "descriptive") {
    return descriptive.test(value);
  }
  else if (regexType === "simple") {
    return simple.test(value);
  }
  else if (regexType === "number") {
    return number.test(value);
  }
  else if (regexType === "special") {
    return special.test(value);
  }
  else if (regexType === "email") {
    return email.test(value);
  }
  else if (regexType === "headlineRegex") {
    return headlineRegex.test(value)
  }
  else if (regexType === "imageRegex") {
    return imageRegex.test(value)
  }
}

// Website URL Validity
export function urlValidity(url: string): string | null {
  const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
  url = url.toLowerCase();
  if (url.trim() !== "") {
    if (!(url.startsWith('http://') || url.startsWith('https://'))) {
      url = 'https://' + url;
      return url;
    }
    if (urlPattern.test(url)) {
      return url;
    }
  }

  return null;
}

export async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}