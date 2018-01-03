// 构造1个singer类
export default class Singer {
  // constructor 属性返回对创建此对象的数组函数的引用。
  constructor({id, name }) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${id}.jpg?max_age=2592000`
  }
}