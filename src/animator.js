const window_size = {
    width: 800,
    height: 600
};

let animator = document.createElement("div");
animator.className = "animator";

/** @type {HTMLCanvasElement} */
let canvas = document.createElement("canvas");
canvas.width = window_size.width;
canvas.height = window_size.height;
canvas.style.border = "1px solid black";
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

animator.appendChild(canvas);
document.body.appendChild(animator);



window.onload = () => {
    console.log("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev!");
};

const loadImage = (path) => {
    let img = new Image();   
    new Promise((resolve) => {
        img.src = path;
        img.onload = () => resolve(img); 
    });
    return img 
}; 

class Animat {
    images = [];
    name = ''

    constructor(name, imagesPath) {
        if (typeof imagesPath === undefined) {
            console.log("No paths to images are specified");
            return;
        }

        for (const imagePath of imagesPath) {
            this.images.push(loadImage(imagePath));
        }
        this.name = name
    }
}

class Animator {
    animations = []
    names = []
    currentAnimation

    speed = 500

    constructor(animations) {
        this.animations = animations
        
        for (const animation of animations) {
            this.names.push(animation.name);
        }

        this.currentAnimation = this.animations[0];
    }

    changeAnimation(name) {
        this.currentAnimation = this.animations[this.names.indexOf(name)];
    }

    runAnimation() {
        const update = () => {
            this.currentAnimation.images.forEach((image) => {
                setTimeout(() => {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                    ctx.drawImage(image, window_size.width/2-image.width/2, window_size.height/2-image.height/2);
                }, this.speed);
            });

            requestAnimationFrame(update);
        }
        
        requestAnimationFrame(update);
    }
}

