<template>
  <v-card height="500px">
    <!-- <div v-if="e2===1">
      <md-speed-dial md-open="hover" md-direction="bottom" class="md-fab-top-left" md-theme="light-blue" style="color: red">
    <md-button class="md-fab" md-fab-trigger>
      <md-icon md-icon-morph>close</md-icon>
      <md-icon>question_answer</md-icon>
    </md-button>

    <md-button class="md-fab md-primary md-mini md-clean"><div @click="lol('data')">1</div></md-button>
    <md-button class="md-fab md-primary md-mini md-clean">2</md-button>
    <md-button class="md-fab md-primary md-mini md-clean">3</md-button>
    <md-button class="md-fab md-primary md-mini md-clean">4</md-button>
  </md-speed-dial> -->
  <!-- <div id="divWheelnav"></div> -->

    </div>
    <div v-if="e2===2">
    </div>
    <div v-if="e2===3">
      <gmap-map :center="{lat: 1.38, lng: 103.8}" :zoom="12" style="width: 100%; height: 500px">
        <gmap-polygon :paths="paths">
        </gmap-polygon>
      </gmap-map>
    </div>
    <v-bottom-nav
      absolute
      shift
      value="true"
      :class="{
        'deep-purple lighten-1': e2 === 1,
        'indigo lighten-1': e2 === 2,
        'blue lighten-1': e2 === 3
      }"
    >
      <v-btn flat light @click.native="e2 = 1" :value="e2 === 1">
        <span>Questions</span>
        <v-icon>question_answer</v-icon>
      </v-btn>
      <v-btn flat light @click.native="e2 = 2" :value="e2 === 2">
        <span>Round Question</span>
        <v-icon>grade</v-icon>
      </v-btn>
      <v-btn flat light @click.native="e2 = 3" :value="e2 === 3">
        <span>Map</span>
        <v-icon>explore</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>

</template>

<!-- <script type="text/javascript" src="raphael.min.js"></script>
<script type="text/javascript" src="raphael.icons.min.js"></script> -->
<script src="./Round.js" ></script>

<link href="./Round.css" rel="stylesheet" type="text/css" />
