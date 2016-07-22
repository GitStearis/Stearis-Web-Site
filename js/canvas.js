<script>
var canvas = document.getElementsByTagName('canvas')[0],
    ctx = null,
    grad = null,
    body = document.getElementsByTagName('body')[0],
    color = 255;
    
if (canvas.getContext('2d')) {
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 500, 500);
  ctx.save();
  // Create radial gradient
  grad = ctx.createRadialGradient(0,0,0,0,0,250); 
  grad.addColorStop(0, '#111');
  grad.addColorStop(1, 'rgb(' + color + ', ' + color + ', ' + color + ')');
  // assign gradients to fill
  ctx.fillStyle = grad;
  // draw 600x600 fill
  ctx.fillRect(0,0,500,500);
  ctx.save();
  
  body.onmousemove = function (event) {
    var width = window.innerWidth, 
        height = window.innerHeight, 
        x = event.clientX, 
        y = event.clientY,
        rx = 500 * x / width,
        ry = 500 * y / height;
        
    var xc = ~~(256 * x / width);
    var yc = ~~(256 * y / height);
    grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, 400); 
    
	grad.addColorStop(0, ['rgb(', (255 - xc), ', ', xc, ', ', (255-yc), ')'].join(''));
    grad.addColorStop(1, ['rgb(', xc, ', ', (255 - xc), ', ', yc, ')'].join(''));
    // ctx.restore();
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,500,500);
    // ctx.save();
  };
}
</script>