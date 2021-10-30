var canvas = new fabric.canvas('my canvas')
ball_y=0;
ball_x=0;
ball_y=400;
ball_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("gofl-h.png" , function) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
	    hole_obj.set({
			top: hole_y,
			left:hole_x
		})
		canvas.add(hole_obj);
		new_image();
	}
}
function new_image()
