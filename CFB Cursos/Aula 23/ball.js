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
        this.y = (this.context.canvas.height / 2) - (this.altura / 2)
        this.x = (this.context.canvas.width / 2) - (this.largura / 2)
    }

    iniciar() {
        this.movendo = true
        this.direção_x = -1
        //this.direção_y = (Math.random() * 10 > 5? -1 : 1)
    }

    gerenciar() {

        if (this.movendo) {

            //Movimentação:

            this.x += (this.direção_x * this.velocidade)
            this.y += (this.direção_y * this.velocidade)

            //Rebote da bola (bordas laterais):

            if (this.x >= (this.context.canvas.width - this.largura)) {
                this.direção_x = -1
                pj1++
            }

            if (this.x <= 0) {
                this.direção_x = 1
                pj2++
            }

            //Colisão bordas superiores e inferiores:

            if (this.y >= (this.context.canvas.height - this.altura)) {
                this.direção_y = -1
            }

            if (this.y <= 0) {
                this.direção_y = 1
            }

            //Colisão com o jogador:

            if ((this.x <= this.jogador.x + this.jogador.largura && this.x + this.largura >= this.jogador.x) &&
                (this.y + this.altura >= this.jogador.y && this.y <= this.jogador.y + this.jogador.altura)) {
                
                    this.direação_x *= 1
                    this.direção_y = ((this.y + (this.altura / 2)) - (this.jogador.y + (this.jogador.altura / 2))) / 16

                //Quanto maior for o número pelo qual o teste lógico está sendo dividido, maior será a sensibilidade do pad e vice-versa.

            } 
        }
    }

    desenhar() {
        this.gerenciar()
        this.context.fillStyle = '#000'
        this.context.fillRect(this.x, this.y, this.largura, this.altura)
    }
}
