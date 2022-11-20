<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Ejercicio 4
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Descripción</h5>
                        <p class="card-text">Crear una página en donde se muestre un campo de texto que permita buscar en el siguiente API: https://pokeapi.co/, por el número o nombre del pokémon y muestre en pantalla los siguientes datos: Nombre, número, tipo, peso, altura y una imágen.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <form v-on:submit.prevent="buscar()">
                                    <label for="">Buscar Pokemon</label>
                                    <input type="text" name="" id="" class="form-control" v-model="nombrePokemon"><br>
                                    <button class="btn btn-primary" type="submit">Multiplicar</button>
                                </form>
                            </div>
                            <div class="col-md-6">
                                <h4>Resultado</h4>
                                <div class="card" style="width: 18rem;" v-if="showInfo">
                                    <img :src="urlImage" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <ul>
                                            <li>Nombre : {{NombreAPI}}</li>
                                            <li>Número : {{numero}}</li>
                                            <li>Tipo : {{tipo}}</li>
                                            <li>Peso : {{Peso}}</li>
                                            <li>Altura : {{altura}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    data(){
        return{
            nombrePokemon:'',
            showInfo:false,
            NombreAPI:'',
            tipo:[],
            Peso:'',
            numero:'',
            altura:'',
            urlImage:''
        }
    },
    methods: {
        async buscar(){

            this.showInfo = true;

            let tempSearch = this.nombrePokemon; 

            if(typeof tempSearch != 'number'){
            let tempSearch = this.nombrePokemon.toLocaleLowerCase(); 
                
            }


            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+tempSearch);

            console.log(response.data.types)

            this.NombreAPI = response.data.name
            this.tipo = response.data.types[0].type.name
            this.Peso = response.data.weight
            this.numero = response.data.order
            this.altura = response.data.height
            this.urlImage = response.data.sprites.back_default
        }
    },
}
</script>
<style lang="">
    
</style>