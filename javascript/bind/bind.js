function binded() {
  console.log(this.name);
}

binded.call({ name: 'world' });
