
var canvas = newfabric.Canvas("myCanvas");

ball_X=0;
ball_Y=0;
hole_X=800;
hole_Y=400;
ball_obj=""
hole_obj=""

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png",function (Img) {
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50)
		hole_obj.set({
			top:hole_Y,
			left:hole_X
		});
		canvas.add(hole_obj);
	})
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png",function (Img) {
		ball_obj= Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_Y,
			left:ball_X
		})
		canvas.add(ball_obj)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
E se a id coordenadas coincidem, para remover a imagem da bola
e exibir "Você atingiu o objetivo!!!" 
além de tornar a borda do canvas vermelha 'red'. */
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ball_obj==hole_obj) {
		remove.ball_obj;
		

	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (myKeyDown=38) {
			//?	
		}
	}

	function down()
	{
		if (myKeyDown=40) {
			//?
		}
	}

	function left()
	{
		if(ball_X >5)<//????
		{
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)<//???
		{
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}

