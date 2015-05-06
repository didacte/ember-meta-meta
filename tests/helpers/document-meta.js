export function title() {
  return document.title;
}

export function description() {
  return document.querySelector('meta[name="description"]').getAttribute('content');
}

export function metaName(name) {
  return document.querySelector('meta[name="' + name + '"]').getAttribute('content');
}

export function metaProperty(property) {
  return document.querySelector('meta[property="' + property + '"]').getAttribute('content');
}
