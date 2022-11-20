<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Ejercicio 1
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Descripción</h5>
                        <p class="card-text">Se debe crear una solución que dado 2 números X y Y cualesquiera, se obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *.</p>
                        <div class="row">
                            <div class="col-md-8">
                                <form v-on:submit.prevent="multiplicar()">
                                    <label for="">Primer Número</label>
                                    <input type="number" name="" id="" class="form-control" v-model="primer_numero">
                                    <label for="">Segundo Número</label>
                                    <input type="number" name="" id="" class="form-control" v-model="segundo_numero"><br>
                                    <button class="btn btn-primary" type="submit">Multiplicar</button>
                                </form>
                            </div>
                            <div class="col-md-4">
                                <h4>Resultado</h4>
                                <p>{{resultado}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            primer_numero:0,
            segundo_numero:0,
            resultado:0
        }
    },
    methods: {
        multiplicar(){
            let temp = this.primer_numero;
            for(var i=1; i < this.segundo_numero; i++){
                temp+=this.primer_numero;
            }

            this.resultado = temp;
        }
    },
}
</script>
<style lang="">
    
</style>