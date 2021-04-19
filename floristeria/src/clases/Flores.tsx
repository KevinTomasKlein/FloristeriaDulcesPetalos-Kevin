export class Flores {
  id: string;
  imgUrl: string;
  name: string;
  binomialName: string;
  price: number;
  wateringsPerWeek: number;
  fertilizerType: string;
  heightInCm: number;

  constructor(
    id: string,
    imgUrl: string,
    name: string,
    binomialName: string,
    price: number,
    wateringsPerWeek: number,
    fertilizerType: string,
    heightInCm: number
  ) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.name = name;
    this.binomialName = binomialName;
    this.price = price;
    this.wateringsPerWeek = wateringsPerWeek;
    this.fertilizerType = fertilizerType;
    this.heightInCm = heightInCm;
  }
}
