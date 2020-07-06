class Paciente {

    constructor(nome, data, sexo, end, telefone, peso, altura, infect, prognostico) {
        if (nome && data && sexo && end && telefone && peso && altura && infect && prognostico) {

            this._nome = nome;
            this._data = data;
            this._sexo = sexo;
            this._end = end;
            this._telefone = telefone;
            this._peso = peso;
            this._altura = altura;
            this._infect = infect;
            this.prognostico = prognostico
        } else {
            this._nome = '';
            this._data = new Date();
            this._sexo.value = '';
            this._end = '';
            this._telefone = '';
            this._peso = 0.0;
            this._altura = 0.0;
            this._infect = não;
            this._prognostico = '';
        }
        Object.freeze(this)
    }


    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }

    get sexo() {
        return this._sexo;
    }

    set sexo(sexo) {
        this._sexo = sexo;
    }

    get end() {
        return this._end;
    }

    set end(end) {
        this._end = end;
    }

    get telefone() {
        return this._telefone;
    }

    set telefone(telefone) {
        this._telefone = telefone;
    }

    get peso() {
        return this._peso;
    }

    set peso(peso) {
        this._peso = peso;
    }

    get altura() {
        return this._altura;
    }

    set altura(altura) {
        this._altura = altura;
    }

    get infect() {
        return this._infect;
    }

    set infect(infect) {
        this._infect = infect;
    }

    get prognostico() {
        return this._prognostico;
    }

    set prognostico(prognostico) {
        this._prognostico = prognostico;
    }
}