export const alphaCodes = Array.from(Array(26)).map((e, i) => i + 65);
export const alphabet = alphaCodes.map((e, i) => i + 65).map((x) => String.fromCharCode(x));
