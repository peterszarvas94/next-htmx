export default function toJson(inputString: string) {
  const keyValuePairs = inputString.split('&');
  const jsonObject: { [key: string]: string } = {};

  keyValuePairs.forEach(pair => {
    const splitted = pair.split('=');

    if (splitted.length !== 2) {
      throw new Error('Invalid input string');
    }

    const key = splitted[0];
    const value = splitted[1];

    jsonObject[key] = value;
  });

  return jsonObject;
}
