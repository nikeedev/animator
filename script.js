let sqaure = new Animate("sqaure", ["./img/Black_Square.png", "./img/Black_Circle.png"])

let ani = new Animator([sqaure])

ani.speed = 2000;

const main = async () => {
    ani.runAnimation();
}

await main();