class cpu {
    constructor(contexto, bola) {
        this.context = contexto
        this.ball = bola
        this.velocidade = 3
        this.largura = 20
        this.altura = 100
        this.x = (this.context.canvas.width - this.largura)
        this.y = (this.context.canvas.height / 2) - (this.altura / 2)
        this.início_x = this.x
        this.início_y = this.y
    }

    gerenciar() {
        if (this.bola.direção_x > 0 && this.bola > this.context.canvas.width / 2) {
            //Rebater a bola.

            if (this.bola.y + this.bola.altura / 2 > this.y + this.altura / 2) {
                this.y += this.velocidade
            }

            if (this.bola.y + this.bola.altura / 2 < this.y + this.altura / 2) {
                this.y -= this.velocidade
            }

            if (this.bola.x + this.bola.largura < this.x) {
                this.x -= this.velocidade
            }
        }

        else {
            //Ir para a posição de origem.

            if (this.y > this.início_y) {
                this.y -= this.velocidade
            }

            if (this.y < this.início_y) {
                this.y += this.velocidade
            }

            if (this.x > this.início_x) {
                this.x -= this.velocidade
            }

            if (this.x < this.início_x) {
                this.x += this.velocidade
            }
        }
    }

    desenhar() {
        this.gerenciar()
        this.context.fillStyle = '#000'
        this.context.fillRect(this.x, this.y, this.largura, this.altura)
    }
}
