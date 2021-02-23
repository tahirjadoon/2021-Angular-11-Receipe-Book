export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  //so that we can use the new key word
  constructor(name: string, desc: string, imagePath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
