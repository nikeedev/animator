let sqaure = new Animat("sqaure", ["./img/Black_Square.png", "./img/Black_Circle.png"])

let ani = new Animator([sqaure])

ani.speed = 2000;

const main = () => {
    ani.runAnimation()
    
    window.requestAnimationFrame(main)
}

window.requestAnimationFrame(main)
