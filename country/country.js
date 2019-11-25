import CountryData from '@/data/countries.json';
export default {
	name: 'country',
	data () {
		return {
			country: this.$route.params.data
		}
	},
	created () {
		if (!this.$route.params.data) {
			this.country = CountryData.countries[this.$route.query.id].data;
		}
	}
}