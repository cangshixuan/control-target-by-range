/**
 * 计算渐变过渡色
 * @param startColor
 * @param endColor
 * @param step
 * @returns {String[]}
 */
export const gradientTransitionColor = (
  startColor: string,
  endColor: string,
  step: number
) => {
  // 将hex转换为rgb
  const sColor = hexToRgb(startColor);
  const eColor = hexToRgb(endColor);

  // 计算R\G\B每一步的差值
  const rStep = (eColor[0] - sColor[0]) / step;
  const gStep = (eColor[1] - sColor[1]) / step;
  const bStep = (eColor[2] - sColor[2]) / step;

  const gradientColorArr = [];
  for (let i = 0; i < step; i += 1) {
    // 计算每一步的hex值
    gradientColorArr.push(
      rgbToHex(
        Math.round(rStep * i + sColor[0]),
        Math.round(gStep * i + sColor[1]),
        Math.round(bStep * i + sColor[2])
      )
    );
  }
  return gradientColorArr;
};

/**
 * hex16进制颜色转成rgb颜色
 * @param hexStr
 * @returns {*[]}
 */
const hexToRgb = (hexStr: string): number[] => {
  if (hexStr.length === 4) {
    // #000
    return hexStr
      .substr(1)
      .split("")
      .map((s) => parseInt(`${s}${s}`, 16));
  }

  // #000000
  return [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(
    (s) => parseInt(s, 16)
  );
};

/**
 * rgb颜色转成hex16进制颜色值
 * @param r
 * @param g
 * @param b
 * @returns {string}
 */
const rgbToHex = (r: number, g: number, b: number): string => {
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
  return `#${hex}`;
};
