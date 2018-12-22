<template>
	<el-card class="box-card" style="margin:20px;width:40%;min-width:500px;">
		<div slot="header" class="clearfix">
			<span>Antarctica and Environment</span>
		</div>
		　　Antarctica has actually become a kind of spacestation a unique observation post for detectingimportant changes in the world' s environment.Remote from major sources of pollution and thecomplex geological and ecological systems that prevail elsewhere, Antarctica makes possiblescientific measurements that are often sharper and easier to interpret than those made inother parts of the world.<br>
		　　Growing numbers of scientists therefore see Antarctica as a distant-early-warning sensor, wherepotentially dangerous global trends may be spotted before they show up to the north. Onepromising field of investigation is glaciology. Scholars from the United States, Switzerland,and France are pursuing seven separate but related projects that reflect their concern for thehealth of the West Antarctic Ice Sheet一a concern they believe the world at large should share.<br>
		　　Now the glaciers are gone,perhaps a casualty of the global warming trend during the 10,000years since the ice age. Even the snow that falls in the dry valleys is blasted out by viciouswinds that roars down from the polar plateau to the sea. Left bare are spectacular gorges,rippled fields of sand dunes, clusters of boulders sculptured into fantastic shapes by 100-mile-an-hour winds, and an aura of extraterrestrial desolation.<br>
		　　Despite the unearthly aspect of the dry valleys, some scientists believe they may carry amessage of hope of the verdant parts of the earth. Some scientists believe that in some casesthe dry valleys may soak up pollutants faster than pollutants enter them.<br><br>

	　　1. What is the best title for this passage?<br>
	　　[A] Antarctica and environmental Problems.<br>
	　　[B] Antarctica: Earth' s Early-Warning station.<br>
	　　[C] Antarctica: a Unique Observation Post.<br>
	　　[D] Antarctica: a Mysterious Place.<br><br>

	　　2. What would the result be if the West Antarctic Ice Sheet disappeared?<br>
	　　[A] The western part of the continent would be disappeared.<br>
	　　[B] The western part of the continent would be reduced.<br>
	　　[C] The western part of the continent would become scattered Islands.<br>
	　　[D] The western part of the continent would be reduced to a cluster of Islands.<br><br>

		<el-button type="primary" @click="onSubmit">查看答案</el-button>
		<div id="answer" v-show="isShow">EE</div>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					type: '',
					old_number: 0,
					new_number: 0
				},
				radio1: '1',
				radio2: '2',
				isShow: false,
			}
		},
		methods: {
			onSubmit() {
				this.isShow = true;
			}
		}
	}

</script>