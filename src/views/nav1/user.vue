<template>
	<el-form :inline="true" :model="form">
		<el-form-item label="题目类型">
			<el-select v-model="form.type" placeholder="选择题">
			<el-option label="选择题" value="multiple_choice"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="错题数量">
			<el-input v-model="form.old_number"></el-input>
		</el-form-item>
		<el-form-item label="新题数量">
			<el-input v-model="form.new_number"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">生成</el-button>
		</el-form-item>
		<el-card class="box-card" style="margin:20px;width:40%;min-width:500px;" v-show="isShow">
			1. I have __________ apple.<br>
			<el-radio v-model="radio1" label="A" border>an</el-radio>
			<el-radio v-model="radio1" label="B" border>a</el-radio>
			<el-radio v-model="radio1" label="C" border>the</el-radio>
			<el-radio v-model="radio1" label="D" border>/</el-radio>
		</el-card>
		<el-card class="box-card" style="margin:20px;width:40%;min-width:500px;" v-show="isShow">
			2. __________ are bald.<br>
			<el-radio v-model="radio2" label="A" border>Programmers</el-radio>
			<el-radio v-model="radio2" label="B" border>Programmer</el-radio>
			<el-radio v-model="radio2" label="C" border>Programs</el-radio>
			<el-radio v-model="radio2" label="D" border>Program</el-radio>
		</el-card>
		
	</el-form>
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