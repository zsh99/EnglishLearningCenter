<template>
	<el-form :model="form" label-width="80px" ref="form" style="margin:20px;width:40%;min-width:500px;">
		<el-form-item label="装样子的自动识别" prop="description">
			<el-upload
			class="upload"
			action=""
			:on-preview="handlePreview"
			:on-remove="handleRemove"
			:before-remove="beforeRemove"
			multiple
			:limit="1"
			:on-exceed="handleExceed"
			:file-list="fileList">
				<el-button size="big" type="primary">点击上传</el-button>
				<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
		</el-form-item>
		<el-form-item label="题目" prop="description">
			<el-input type="textarea" v-model="form.description"></el-input>
		</el-form-item>
		<el-form-item label="A" prop="option_A">
			<el-input v-model="form.option_A"></el-input>
		</el-form-item>
		<el-form-item label="B" prop="option_B">
			<el-input v-model="form.option_B"></el-input>
		</el-form-item>
		<el-form-item label="C" prop="option_C">
			<el-input v-model="form.option_C"></el-input>
		</el-form-item>
		<el-form-item label="D" prop="option_D">
			<el-input v-model="form.option_D"></el-input>
		</el-form-item>
		<el-form-item label="正确答案" prop="correct_answer">
			<el-input v-model="form.correct_answer"></el-input>
		</el-form-item>
		<el-form-item label="原因" prop="reason">
			<el-input type="textarea" v-model="form.reason"></el-input>
		</el-form-item>
		<el-form-item label="知识点" prop="point">
			<el-input v-model="form.point"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [],
				form: {
					description: '',
					option_A: '',
					option_B: '',
					option_C: '',
					option_D: '',
					correct_answer: '',
					reason: '',
					point: '',
				},
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			}
		}
	}

</script>