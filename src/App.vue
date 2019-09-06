<template>
  <div id="app" class="o-wrapper">
    <div class="c-header">
      <router-link class="c-header__item" to="/">Diary</router-link> 
      <router-link class="c-header__item" to="/about">Backlog</router-link> 
      <router-link class="c-header__item" to="/stats">Stats</router-link> 
      <router-link class="c-header__item" to="/pattern">Create pattern</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" src="../src/assets/styles/main.scss" />
