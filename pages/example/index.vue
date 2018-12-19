<template>
	<div>
		<h1 class="test">Testando</h1>
		<section class="recipes">
			<Item 
				v-for="item in items"
				:key="item.id"
				:thumbnail="item.thumbnail"
				:title="item.title" 
				:previewText="item.previewText" 
				:id="item.id"/>
		</section>
	</div>
</template>

<script>
	import Item from "@/components/Item";

	export default {
		components: {
			Item
		},
		asyncData() {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve({
						items: [
							{
								id: "1",
								title: "Delicious Pizza",
								previewText: "Awesome Pizza!",
								thumbnail: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
							},
							{
								id: "2",
								title: "Delicious Pizza2",
								previewText: "Awesome Pizza!2",
								thumbnail: "https://www.thehindu.com/migration_catalog/article16748376.ece/alternates/FREE_300/21MPCHILD_EATING_PIZZA_NAGARA_GOPAL"
							}
						]
					})
				}, 9000);
			});
		},
		head() {
			return {
				title: "Geek4Geek | Example"
			}
		}
	}
</script>

<style scoped>
	.test {
		text-align: center;
	}

	.recipes {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
	}
</style>
