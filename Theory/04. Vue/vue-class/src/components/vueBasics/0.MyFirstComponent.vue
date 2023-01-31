<!-- HTML -->
<template>
<!-- HTML puesto a pelo -->
<div>
    <p>Mi nombre es {{myName}}, tengo 29 años y soy de BCN
    </p>
    
<section>
    <p>
        Mi película preferida es {{favMovie}}, que habré visto {{timesSeen}} ya que la dan cada año en la tele, a veces mientras ceno mi comida preferidao {{favDish}}.
    </p>
    Soy {{myData.name}}, tengo {{myData.age}} y mi cumpleaños es el {{myData.DOB}}. Me gusta la {{myData.hobbies}} y mi educación universitaria es {{myData.education.primaria}}. Me encanta el género de música {{myData.favoriteMusic}}.
</section>
</div>
</template>

<!-- JS - Logica  -->
<script setup>
import { ref, reactive } from "vue";

const myName = ref("Alexis")

const favMovie = ref("Nightmare before Christmas")
const timesSeen = ref(29)
const favDish = ref("唐揚げ")
const myData = reactive ({
    name: "Alexis",
    age: 29,
    DOB: "September 22, 1993",
    hobbies: "programming",
    education: {
        primaria: true,
        secundaria: true,
        universidad: true
    },
    "favoriteMusic": "LoFi"

})

</script>


<!-- Estilos aquí -->
<style scoped>
</style>