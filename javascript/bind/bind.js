function binded(x, y, z) {
  console.log(this.name, x, y, z);
}

binded.call({ name: 'world' });
binded.apply({ name: 'Steve' }, [0, 1, 2]);
