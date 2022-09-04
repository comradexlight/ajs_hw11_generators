export default function canIterate(object) {
  if (object === null || object === undefined) {
    return false;
  }

  return typeof object[Symbol.iterator] === 'function';
}
