<template>
	<el-form :inline="true" :model="form">
		<el-form-item label="单词数量">
			<el-input v-model="form.number"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit1">生成</el-button>
		</el-form-item>
		<el-card class="box-card" style="margin:20px;width:20%;min-width:200px;" v-show="isShow1">
			apple<br>
			<el-button type="primary" size="small" @click="onSubmit2">查看意思</el-button>
			<div v-show="isShow2">
				n. 苹果<br>
				<el-button type="primary" size="small">记得</el-button>
				<el-button type="primary" size="small">不记得</el-button>
			</div>
		</el-card>
		
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					number: 0
				},
				isShow1: false,
				isShow2: false,
			}
		},
		methods: {
			onSubmit1() {
				this.isShow1 = true;
			},
			onSubmit2() {
				this.isShow2 = true;
			},
		}
	}

</script>