class cpu {
    constructor(contexto, bola) {
        this.context = contexto
        this.ball = bola
        this.velocidade = 2.5
        this.largura = 20
        this.altura = 100
        this.x = (this.context.canvas.width - this.largura)
        this.y = (this.context.canvas.height / 2) - (this.altura / 2)
        this.início_x = this.x
        this.início_y = this.y
        this.meio_y = Math.random() * this.altura
    }

    gerenciar() {
        if (this.bola.direção_x > 0 && this.bola > this.context.canvas.width / 2) {
            //Rebater a bola.

            if (this.bola.y + this.bola.altura / 2 > this.y + this.meio_y) {
                this.y += this.velocidade
            }

            if (this.bola.y + this.bola.altura / 2 < this.y + this.meio_y) {
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

        //Colisão CPU:

        if ((this.x <= this.bola.x + this.bola.largura && this.x + this.largura >= this.bola.x) &&
                (this.y + this.altura >= this.bola.y && this.y <= this.bola.y + this.bola.altura)) {
                
                    this.bola.direação_x = -1
                    this.bola.direção_y = ((this.bola.y + (this.bola.altura / 2)) - (this.y + (this.altura / 2))) / 16

            //Quanto maior for o número pelo qual o teste lógico está sendo dividido, maior será a sensibilidade do pad e vice-versa.

            this.meio_y = Math.random() * this.altura

        } 
    }

    desenhar() {
        this.gerenciar()
        this.context.fillStyle = '#000'
        this.context.fillRect(this.x, this.y, this.largura, this.altura)
    }
}
