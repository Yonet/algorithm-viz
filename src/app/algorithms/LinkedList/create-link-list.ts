export class LinkNode {
  prev: null;
  next: null;
  value: null;
}

export class LinkList {
  node: LinkNode[];
}

export function createRandomArray(n = 5) {
  const l = [];
  for (let i = 0; i < n; i++) {
    l.push(Math.floor(Math.random() * 10));
  }
  return l;
}

export function createLinkedList(a = createRandomArray(), circular = false) {
  const list = {};
  const l = a.length;
  for (let i = 0; i < l; i++) {
    const prev = a[i - 1] || a[l - 1];
    const next = a[i + 1] || a[0];
    console.log('p, n', prev, next);
    let node = {
      prev: prev,
      next: next,
      value: a[i],
    };
    if (i === 0 && !circular) {
      node = Object.assign({}, node, {
        prev: null,
      });

      if (circular) {
        node = Object.assign({}, node, {
          prev: a[l - 1],
        })
      }

    } else if (i === (l - 1) && !circular) {
      node = Object.assign({}, node, {
        next: null,
      })
    }
    list[i] = node;
  }
  return list;
}

createLinkedList(createRandomArray(10), true);
createLinkedList();
