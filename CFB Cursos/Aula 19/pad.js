class Pad {
    constructor(contexto, teclado) {
        this.context = contexto
        this.keyboard = teclado
        this.velocidade = 3
        this.largura = 20
        this.altura = 100
        this.x = 0
        this.y = (this.context.canvas.height / 2) - (this.altura / 2)
    }

    gerenciar() {
        if (this.keyboard.esquerda) {
            if (this.x > 0)
            this.x -= this.velocidade
        }

        if (this.keyboard.direita) {
            if (this.x < this.context.canvas.width / 2 - this.largura)
            this.x += this.velocidade
        }

        if (this.keyboard.cima) {
            if (this.y > 0)
            this.y -= this.velocidade
        }

        if (this.keyboard.baixo) {
            if (this.y < this.context.canvas.height - this.altura)
            this.y += this.velocidade
        }
    }

    desenhar() {
        this.gerenciar()
        this.context.fillStyle = '#000'
        this.context.fillRect(this.x, this.y, this.largura, this.altura)
    }
}
