<template>
  <div>
    <v-card v-for="hint, index in hints" :key="index">
      <v-card-text class="blue-grey lighten-3 white--text mt-3">
        <div style="color: black">{{ hint }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script src="./Hints.js" ></script>
<link href="./Hints.css" rel="stylesheet" type="text/css" />
