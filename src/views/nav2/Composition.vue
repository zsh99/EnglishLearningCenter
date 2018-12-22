<template>
    <div>
		<el-form :model="form" label-width="80px" ref="form" style="margin:20px;width:50%;min-width:500px;text-align:center">
			<el-form-item label="你的作文" prop="composition">
				<el-input type="textarea" rows=20 v-model="form.composition"></el-input>
			</el-form-item>
			<el-button type="primary" @click="onSubmit">提交</el-button>
		</el-form>
		<div id="answer" style="margin:20px;width:50%;text-align:center;font-size:15px" v-show="isShow">
			<div style="text-align:center;font-size:20px">评分</div>
			词汇<el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
			语法<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
			结构<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
			<div style="text-align:left;font-size:20px">
				具体建议：<br>
				写得真好！
			</div>
		</div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					composition: ''
				},
				isShow: false
			}
		},
		methods: {
			onSubmit() {
				this.isShow = true;
			}
		}
	}

</script>