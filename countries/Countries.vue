<template>
	<div class="countries">
		<h1>Countries</h1>
		<input type="text" v-model="query" @keyup="search" placeholder="Search" />
		<ul class="countries-list">
			<li class="list-item" v-for="(country, index) in results">
				<router-link :to="{ name: 'country', query: { id: index}, params: { data: country.data }}">
					{{ country.data.name }}
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script src="./countries.js"></script>
<style lang="scss">
	@import 'countries';
</style>