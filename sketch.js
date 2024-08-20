let player;
let obstacles = [];
let score = 0;
let gameOver = false;
let upPresses = 0;

function setup() {
    createCanvas(800, 600);
    player = new Player();
}

function draw() {
    background(200);  // Limpa a tela a cada quadro, removendo qualquer artefato gráfico
    
    if (!gameOver) {
        player.update();
        player.display();

        if (frameCount % 60 === 0) {
            obstacles.push(new Obstacle());
        }

        for (let i = obstacles.length - 1; i >= 0; i--) {
            obstacles[i].update();
            obstacles[i].display();

            if (obstacles[i].hits(player)) {
                gameOver = true;
            }

            if (obstacles[i].offscreen()) {
                obstacles.splice(i, 1);
                score++;
            }
        }

        // Exibir pontuação e contagem de pressões da seta para cima
        fill(0);
        textSize(24);
        textAlign(LEFT, TOP); // Alinha o texto ao canto superior esquerdo
        text("Pontuação: " + score, 10, 30);
       
    } else {
        fill(0);
        textSize(48);
        textAlign(CENTER, CENTER); // Centraliza o texto na tela
        text("Game Over", width / 2, height / 2 - 20);
        textSize(24);
        text("Aperte R para reiniciar", width / 2, height / 2 + 20);
    }
}

function keyPressed() {
    if (key === 'R' || key === 'r') {
        resetGame();
    } else if (keyCode === UP_ARROW) {
        upPresses++;
        player.up();
    }
}

function resetGame() {
    obstacles = [];
    score = 0;
    gameOver = false;
    player = new Player();
    upPresses = 0;
}

class Player {
    constructor() {
        this.x = 100;
        this.y = height / 2;
        this.size = 50;
        this.gravity = 0.6;
        this.ySpeed = 0;
    }

    update() {
        this.ySpeed += this.gravity;
        this.y += this.ySpeed;

        if (this.y > height - this.size / 2) {
            this.y = height - this.size / 2;
            this.ySpeed = 0;
        }

        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.ySpeed = 0;
        }
    }

    up() {
        let lift = -15 * upPresses;
        this.ySpeed += lift;
        upPresses = 0;
    }

    display() {
        fill(0, 255, 0);
        ellipse(this.x, this.y, this.size);
    }
}

class Obstacle {
    constructor() {
        this.top = random(height / 2);
        this.bottom = random(height / 2);
        this.x = width;
        this.w = 20;
        this.speed = 6;
    }

    update() {
        this.x -= this.speed;
    }

    display() {
        fill(255, 0, 0);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }

    hits(player) {
        if (player.y < this.top || player.y > height - this.bottom) {
            if (player.x > this.x && player.x < this.x + this.w) {
                return true;
            }
        }
        return false;
    }

    offscreen() {
        return this.x < -this.w;
    }
}
