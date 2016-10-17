import build from '../content/build.json'

export function getContent(path) {
  return build.find(page => page.path === path) || {}
}
