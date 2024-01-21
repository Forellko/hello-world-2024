const obj = {
  name: 'Jayson',
  set name1(name) {
    this.name = '1' + name;
  },
  get name1() {
    return this.name + '2';
  },
};
obj.name1 = 'hello';
