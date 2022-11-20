<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Ejercicio 2
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Descripción</h5>
                        <p class="card-text">Realice una página en donde se ingrese un password con las condiciones del ejercicio número 3, en donde se muestren cada una de las condiciones del password y a medida que se vaya introduciendo el password se irán mostrando de color rojo los que no son válidos y en color verde los que sean válidos. Por ejemplo:</p>
                        <div class="row">
                            <div class="col-md-8">
                                <form>
                                    <label for="">Contraseña</label>
                                    <input type="password" name="" id="" class="form-control" v-model="password" v-on:keyup="validarPassword()"><br>
                                    <button class="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                            <div class="col-md-4">
                                <h4>Requisitos</h4>
                                <ul>
                                    <li :style="{color:flag1}">Minúsculas</li>
                                    <li :style="{color:flag2}">Una Mayúscula</li>
                                    <li :style="{color:flag3}">Un número</li>
                                    <li :style="{color:flag4}">Mínimo 8 caracteres</li>
                                </ul>
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
            password:'',
            flag1:'red',
            flag2:'red',
            flag3:'red',
            flag4:'red',
        }
    },
    methods: {
        validarPassword(){

           let minusculas = /[a-z]/g;
           let mayusculas = /[A-Z]/g;
           let numeros = /[0-9]/g;
           let minimumlongString = 8; 

           if(this.password.match(minusculas)) {  
            this.flag1="green"
           }else{
            this.flag1="red"
           }


           if(this.password.match(mayusculas)) {  
            this.flag2="green"
           }else{
            this.flag2="red"
           }

           if(this.password.match(numeros)) {  
                this.flag3="green"
            }else{
                this.flag3="red"
            }

           if(this.password.length>minimumlongString){
                this.flag4="green";
            }else{
                this.flag4 = "red"
            }
            

            

        }
    },
}
</script>
<style lang="">
    
</style>