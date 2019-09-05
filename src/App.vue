<template>
  <div id="app" class="o-wrapper">
    <div class="c-header">
      <router-link to="/">Diary</router-link> |
      <router-link to="/about">Backlog</router-link> |
      <router-link to="/stats">Stats</router-link> |
      <router-link to="/pattern">Create pattern</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" src="../src/assets/styles/main.scss" />
