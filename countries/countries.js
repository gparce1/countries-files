import CountriesData from '@/data/countries.json';
import _ from 'lodash';

export default {
	name: 'countries',
	data () {
		return {
			query: null,
			countries: CountriesData.countries,
			results: null
		}
	},
	computed: {
		flagSource() {
			console.log
		}
	},
	methods: {
		getCountryCode(data) {
			if (data.communications && data.communications.internet && data.communications.internet.country_code) {
				return data.communications.internet.country_code.substring(1, 3);
			} else {
				return undefined;
			}
		},
		search: _.debounce(function() {
			if (this.query) {
				this.results = Object.fromEntries(Object.entries(this.countries).filter(([key,value]) => {
					return value.data.name.toLowerCase().includes(this.query.toLowerCase());
				}));
			} else {
				this.results = this.countries;
			}
		}, 300)
	},
	created () {
		this.results = this.countries;
	}
}