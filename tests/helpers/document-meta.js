export function title() {
  return document.title;
}

export function description() {
  return document.querySelector('meta[name="description"]').getAttribute('content');
}

export function meta(name) {
  return document.querySelector('meta[name="' + name + '"]').getAttribute('content');
}
