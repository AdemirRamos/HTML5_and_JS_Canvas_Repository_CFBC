class Moviment {
    constructor(contexto, teclado) {
        this.context = contexto
        this.keyboard = teclado
        this.y = 0
        this.x = 0
        this.velocidade = 1
        this.lofi = new Image()
        this.lofi.src = './Mídia/Lofi.jpg'

        //Também poderia ser feito desta maneira: "this.lofi.onLoad".

        this.lofi.addEventListener('load', ()=> {
            this.desenhar()
        })
    }

    gerenciar() {
        if (this.keyboard.esquerda) {
            this.x -= this.velocidade
        }

        if (this.keyboard.direita) {
            this.x += this.velocidade
        }

        if (this.keyboard.cima) {
            this.y -= this.velocidade
        }

        if (this.keyboard.baixo) {
            this.y += this.velocidade
        }
    }

    desenhar() {
        this.gerenciar()
        this.context.drawImage(this.lofi, this.x, this.y)
    }
}
