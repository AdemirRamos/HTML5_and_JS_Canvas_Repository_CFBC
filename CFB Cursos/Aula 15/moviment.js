class Moviment {
    constructor(contexto, teclado) {
        this.context = contexto
        this.keyboard = teclado
        this.y = 0
        this.x = 0
        this.velocidade = 1
        this.image = new Image()
        this.image.src = './Mídia/Songs For The Deaf.png'
        //this.image.src = './Mídia/Lofi.jpg' -> Caso se deseje usar a imagem "Lofi".

        this.image.addEventListener('load', ()=> {
            this.desenhar()
        })
    }

    gerenciar() {
        if (this.keyboard.esquerda) {
            if (this.x > 0)
            this.x -= this.velocidade
        }

        if (this.keyboard.direita) {
            if (this.x < this.context.canvas.width - this.image.width)
            this.x += this.velocidade
        }

        if (this.keyboard.cima) {
            if (this.y > 0)
            this.y -= this.velocidade
        }

        if (this.keyboard.baixo) {
            if (this.y < this.context.canvas.height - this.image.height)
            this.y += this.velocidade
        }
    }

    desenhar() {
        this.gerenciar()
        this.context.drawImage(this.image, this.x, this.y)
    }
}
