class Ball {
    constructor(contexto, jogador) {
        this.context = contexto
        this.movendo = false
        this.jogador = jogador
        this.direção_x = 0
        this.direção_y = 0
        this.velocidade = 3
        this.largura = 20
        this.altura = 20
        this.x = 0
        this.y = (this.context.canvas.height / 2) - (this.altura / 2)
        this.x = (this.context.canvas.width / 2) - (this.largura / 2)
    }

    iniciar() {
        this.movendo = true
        this.direção_x = -1
        this.direção_y = (Math.random() * 10 > 5? -1 : 1)
    }

    gerenciar() {

        if (this.movendo) {
            this.x += (this.direção_x * this.velocidade)
            this.y += (this.direção_y * this.velocidade)

            if (this.x >= (this.context.canvas.width - this.largura)) {
                this.direção_x = -1
            }

            if (this.x <= 0) {
                this.direção_x = 1
            }

            if (this.y >= (this.context.canvas.height - this.altura)) {
                this.direção_y = -1
            }

            if (this.y <= 0) {
                this.direção_y = 1
            }

            if ((this.x <= this.jogador.x + this.jogador.largura && this.x + this.largura >= this.joador.x) &&
                (this.y + this.altura >= this.jogador.y && this.y <= this.jogador.y + this.jogador.altura)) {
                this.direação_x *= -1
            }
        }
    }

    desenhar() {
        this.gerenciar()
        this.context.fillStyle = '#000'
        this.context.fillRect(this.x, this.y, this.largura, this.altura)
    }
}
