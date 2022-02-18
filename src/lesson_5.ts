// Правильно реализовать наследование следующих классов.
// Абстрактный класс MyGraphicsPrimitive2D у которого есть следующие свойства: прямоугольная область(2 точки координат (x и y), левая верхняя и правая нижняя),
// описывающая примитив, т.е. область данной фигуры;
// метод - переместить примитив на заданное смещение (просто число);.
//
// От него дожен наследоваться абстрактный класс MyAreaPrimitive2D, у которого есть абстрактный метод площадь фигуры.
//
// От него должны наследоваться класс MyCircle, у него есть свойства: центр окружности и ее радиус,
//
// а также должен наследоваться класс MyRectangle с методами: ширина и высота

export interface coordinate {
  x: number;
  y: number;
}

export abstract class MyGraphicsPrimitive2D {
  abstract leftTop: coordinate;
  abstract rightBottom: coordinate;

  protected move(coordinate: coordinate): void {
    this.leftTop = {
      x: this.leftTop.x + coordinate.x,
      y: this.leftTop.y + coordinate.y,
    };

    this.rightBottom = {
      x: this.rightBottom.x + coordinate.x,
      y: this.rightBottom.y + coordinate.y,
    };
  }
}


export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  protected getSquareArea(): number {
    return (this.leftTop.x + this.rightBottom.x) * (this.leftTop.y + this.rightBottom.y);
  }
}

export class MyCircle extends MyAreaPrimitive2D {
  public leftTop: coordinate;
  public rightBottom: coordinate;

  public circleCenter: coordinate | undefined;
  public radius: number | undefined;

  constructor(
    leftTop: coordinate,
    rightBottom: coordinate,
  ) {
    super();
    this.leftTop = leftTop;
    this.rightBottom = rightBottom;
  }


}

export class MyRectangle extends MyAreaPrimitive2D {
  public leftTop: coordinate;
  public rightBottom: coordinate;

  constructor(
    leftTop: coordinate,
    rightBottom: coordinate,
  ) {
    super();
    this.leftTop = leftTop;
    this.rightBottom = rightBottom;
  }

  getWidth(): number {
    return this.rightBottom.x - this.leftTop.x;
  }
  getHeight(): number {
    return this.leftTop.y - this.rightBottom.y;
  }
}
