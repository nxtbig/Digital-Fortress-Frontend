<template>
  <div>
    <v-card v-for="rule, index in rules" :key="index">
      <v-card-text class="blue-grey lighten-3 white--text mt-3">
        <div style="color: black">{{ rule }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script src="./Rules.js" ></script>
<link href="./Rules.css" rel="stylesheet" type="text/css" />
