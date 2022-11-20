<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Ejercicio 3
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Descripción</h5>
                        <p class="card-text">Dado un arreglo de números (cualquiera) sacar la siguiente información:</p>
                        <ul>
                            <li>Cantidad de elementos del arreglo.</li>
                            <li>Porcentaje de números pares e impares..</li>
                            <li>Porcentaje de números mayores a 1000..</li>
                            <li>Cuál es el mayor y menor valor..</li>
                            <li>Asuma los siguientes indicadores: Tome en cuenta que el mayor número representa el 100%, indique cual es el porcentaje del número mínimo y el porcentaje del promedio de todos los números.</li>
                        </ul>
                        <div class="row">
                            <div class="col-md-6">
                                <form v-on:submit.prevent="agregarElemento()">
                                    <label for="">Valor</label>
                                    <input type="number" name="" id="" class="form-control" v-model="valor"><br>
                                    <button class="btn btn-primary" type="submit">Agregar</button>
                                </form>
                            </div>
                            <div class="col-md-6">
                                <h4>Resultados para el array {{elementos}}</h4>
                                <p></p>
                                <ul>
                                    <li>Cantidad de elementos en el arreglo : {{elementos.length}}</li>
                                    <li>Porcentaje de elementos Pares : {{porcentajePares}}%</li>
                                    <li>Porcentaje de elementos Impares : {{porcentajeImPares}}%</li>
                                    <li>Porcentaje de numeros mayores a 1000 : {{porcentajeNumerosMayoresAMil}}%</li>
                                    <li>Número Menor : {{menor}}</li>
                                    <li>Número Mayor : {{mayor}}</li>
                                    <li>Promedio : {{promedio}}</li>
                                </ul>
                                <!-- <button class="btn btn-primary" type="submit">Generar Resultados</button> -->
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
            valor:'',
            elementos:[],
            porcentajeImPares:0,
            porcentajePares:0,
            porcentajeNumerosMayoresAMil:0,
            menor:0,
            mayor:0,
            promedio:0
        }
    },
    methods: {
        agregarElemento(){
            this.elementos.push(this.valor);
            this.valor = '';

            let totalPares = 0;
            let totalImPares = 0;
            let totalMayoresAMil = 0;
            let suma=0;

            this.menor = this.elementos[0];

            for (let index = 0; index < this.elementos.length; index++) {
                if((this.elementos[index] % 2)==0){
                    totalPares+=1;
                }else{
                    totalImPares+=1;
                }

                if(this.elementos[index]>1000){
                    totalMayoresAMil+=1;
                }

                if(this.elementos[index]>this.mayor){
                    this.mayor = this.elementos[index];
                }

                if(this.elementos[index]<this.menor){
                    this.menor = this.elementos[index];
                }

                suma+=this.elementos[index];
                
            }

            
            this.promedio = Math.round((suma/this.elementos.length));
            this.porcentajePares = Math.round((totalPares*100)/this.elementos.length);
            this.porcentajeImPares = Math.round((totalImPares*100)/this.elementos.length);

            this.porcentajeNumerosMayoresAMil = Math.round((totalMayoresAMil*100)/this.elementos.length);







        }
    },
}
</script>
<style lang="">
    
</style>