const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

document.addEventListener('keydown', keypush);
setInterval(game, 50);
const velocity = 1;

let vx = vy = 0;
let px = 10;
let py = 15;
let tp = 30;
let qp = 20;
let ax = ay = 15;

let trail = []
let tail = 5;


function game(){
    px += vx;
    py += vy;

    if(px < 0){
        px = qp -1
    }
    else if(px > qp -1){
        px = 0
    }
    else if (py < 0){
        py = qp -1
    }
    else if (py > qp -1){
        py = 0
    }
    else if (vx < -1){
        vx = qp +1
    }
    else if (vx > qp +1 ){
        vx = 0
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0,0, cnv.width, cnv.height)

    ctx.fillStyle = 'red'
    ctx.fillRect(ax*tp, ay*tp, tp, tp)

    ctx.fillStyle = 'white'
    for(let i= 0; i < trail.length; i ++){
        ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-5, tp -5);
        
        if(trail[i].x == px && trail[i].y == py){
            vx = vy = 0;
            tail = 5;
        }
    }
    trail.push({x:px, y:py})
    while(trail.length > tail){
        trail.shift();

    }
    if(ax == px && ay == py){
        tail++;
        
        ax = Math.floor(Math.random(cnv.width)*qp);
        ay = Math.floor(Math.random(cnv.height)*qp);

    }
    else if (ax == px && ay == py){
        velocity++
    }
}
function keypush(event){
    switch(event.keyCode){
        case 37:
            vx = -velocity;
            vy = 0;
            break;
            case 38:
                vx = 0;
                vy = -velocity;
                break;
                case 39:
                    vx = velocity;
                    vy = 0;
                    break;
                    case 40:
                        vx = 0 ;
                        vy = velocity;
                    break;
                    default:
                    break
    }

}
function loop(){

}