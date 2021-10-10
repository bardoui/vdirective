<template>
    <div class="input">
        <label>{{ title || "Input" }}:</label>
        <input type="text" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: ["title"]
});
</script>
