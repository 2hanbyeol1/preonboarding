const getIsRequiredOption = (name: string) => ({
  message: `${name}${
    hasLastConsonantLetter(name) ? "은" : "는"
  } 필수 입력 값입니다.`,
  value: true,
});

const getMinLengthOption = (name: string, minLength: number) => ({
  message: `${name}${
    hasLastConsonantLetter(name) ? "을" : "를"
  } ${minLength}글자 이상 입력하세요`,
  value: minLength,
});

const hasLastConsonantLetter = (text: string) =>
  (text.charCodeAt(text.length - 1) - "가".charCodeAt(0)) % 28 !== 0;

export const getRegisterOptions = (
  name: string,
  isRequired: boolean = false,
  minLength: number = 0
) => ({
  required: isRequired && getIsRequiredOption(name),
  minLength: minLength && getMinLengthOption(name, minLength),
});
