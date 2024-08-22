export class StringUtils {
  public toUpperCase(str: string) {
    if (!str) {
      throw new Error('Invalid argument!');
    }
    return str.toUpperCase();
  }

  public getStringInfo(str: string): stringInfo {
    return {
      lowerCase: str.toLowerCase(),
      upperCase: str.toUpperCase(),
      characters: Array.from(str),
      length: str.length,
    };
  }
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
};
