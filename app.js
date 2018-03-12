window.vue = new Vue({
	el:'#app',
	name:'cart',
	data:{
		isLoading:true,
		cart:[],
		saved:[]
	},
	methods:{
		removeFromCard(){
			console.log('...');
		}
	},
	created() {
	   fetch('./data.json')
        .then((res) => { return res.json() })
        .then((res) => {
        	this.isLoading=false;
        	this.cart=res.cart;
        	this.saved=res.saved;
         })
    }
});

