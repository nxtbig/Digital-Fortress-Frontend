<template>
  <v-card>
    <v-card-title>
      Leaderboard
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="headers"
        v-bind:items="items"
        v-bind:search="search"
      >
      <template slot="items" scope="props">
        <td>
      {{ props.item.name }}
        </td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.round }}</td>
        <td class="text-xs-right">{{ props.item.last_solved }}</td>
        <td>
          <v-edit-dialog
            class="text-xs-right"
            @open="props.item._iron = props.item.iron"
            @cancel="props.item.iron = props.item._iron || props.item.iron"
            large
            lazy
          >
            <div class="text-xs-right">{{ props.item.iron }}</div>
            <div slot="input" class="mt-3 title">Update Iron</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-bind:value="props.item.iron"
              v-on:blur="val => props.item.iron = val"
              single-line
              counter
              autofocus
            ></v-text-field>
          </v-edit-dialog>
        </td>
      </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script src="./Leaderboard.js" ></script>
<link href="./Leaderboard.css" rel="stylesheet" type="text/css" />
