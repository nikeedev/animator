
const loadImage = (path) => {
    let img = new Image();
    new Promise((resolve, reject) => {
        img.src = path;
        img.onload = () => resolve(img); 
        return img
    }).then(response => {
        return response
    }) 
}; 

class Animation {
    images = [];
    name = ''

    constructor(name, imagesPath) {
        for (const imagePath of imagesPath) {
            images.push(loadImage(imagePath));
        }
        this.name = name
    }
}

class Animator {
    animations = []

    constructor(animations) {
        this.animations = animations
    }

    changeAnimation(name) {

    }

    runAnimation() {

    }
    
    speed(speedSeconds) {
        
    }
}