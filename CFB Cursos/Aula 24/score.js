class Placar {
    constructor(contexto) {
        this.context = contexto
        this.direita = this.context.canvas.width
        this.margem = 10
        this.largura = 100
    }

    desenhar() {
        this.context.font = '70px arial'
        this.context.fillStyle = '#000'
        this.context.fillText(pj1, this.margem, this.margem + 70, this.largura)
        this.context.fillText(pj2, this.direita - this.largura - this.margem, this.margem + 70, this.largura)
    }
}
