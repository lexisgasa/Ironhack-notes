<template>
    <div>
        <!-- Ej 1 -->
        <h1 :id="practiceId">
            This is a h1 tag
        </h1>
        <!-- Ej 2 -->
        <h2 :class="practiceClass ? 'isActive' : 'isntActive' ">
            This is a h2 tag
        </h2>
        <!-- Ej 3 -->
        <h3 :style="bunchStyles">
            This is a h3 tag
        </h3>
        <!-- Ej 4 -->
        <h4 :class="[isRed && 'red', hasBorder && 'border']">
            This is a h4 tag    
        </h4>
    </div>
</template>

<script setup>

import { reactive, ref } from "@vue/reactivity";

// Ej 1
const practiceId = ref("daFuqAmDoingId")

// Ej 2
const practiceClass = ref(true)

// Ej 3

const bunchStyles = reactive ({
    color: "blueviolet",
    fontSize: "3rem",
    backgroundColor: "deepskyblue",
    width: "20vw"
})

// Ej 4
const isRed = ref(true)
const hasBorder = ref(true)


// Instrucciones ejercicios Attribute Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis).

// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render.

// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis).

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no.

</script>

<style scoped>

/* Ej 1 */
#daFuqAmDoingId {
    background-color: wheat;
    text-decoration-line: overline;
    width: 14vw;
}

/* Ej 2 */

.isActive {
    color: green;
}

.isntActive {
    display: none;
}

/* Ej 3 */
/* nada */

/* Ej 4 */
.red {
    color: red;
}

.border {
    border: 2px solid orange;
}

</style>



