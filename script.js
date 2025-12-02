//complete this code
class Rectangle {
	constructor(width, height){
		this.width= width;
		this.height= height;
	}
	width(){
		console.log(this.width);
	}
	height(){
		console.log(this.height);
	}
	getArea(){
		console.log(width*height);
	}
}

class Square extends Rectangle{
	constructor(side){
		this.side= side;
	}
	getArea(side){
		console.log(side*side);
	}
	getPerimeter(){
		console.log(`4 * ${this.side}`);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
