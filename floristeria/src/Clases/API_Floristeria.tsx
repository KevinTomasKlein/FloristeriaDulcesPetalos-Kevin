export class API_Floristeria {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: string;
  heightInCm: number;
  constructor(
    id: string,
    name: string,
    bonimialName: string,
    price: number,
    imgUrl: string,
    wateringsPerWeek: number,
    fertilizerType: string,
    heightInCm: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.binomialName = bonimialName;
    this.imgUrl = imgUrl;
    this.wateringsPerWeek = wateringsPerWeek;
    this.fertilizerType = fertilizerType;
    this.heightInCm = heightInCm;
  }
}
