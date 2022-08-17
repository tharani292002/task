<template>
    <!-- FORM -->
    <div>
        <el-button type="success" @click="dialogFormVisibleButton">ADD</el-button>
        <div class="name">

            <el-dialog title="ENTER EMPLOYEE DETAILS" :visible.sync="dialogFormVisible">
                <el-form ref="form" :model="form" label-width="150px" :rules="rules">
                    <!-- input NAME-->
                    <el-form-item label="Enter Name" prop="name">
                        <el-input clearable v-model="form.name" placeholder="enter name"></el-input>
                    </el-form-item>
                    <!-- age -->
                    <el-form-item label="Enter Employee id" prop="empid">
                        <el-input v-model="form.empid" type="number" placeholder="enter age"></el-input>
                    </el-form-item>

                    <!-- EMP ID -->
                    <el-form-item label="Enter Age" prop="age">
                        <el-input v-model="form.age" type="number"></el-input>
                    </el-form-item>

                    <!-- date -->
                    <el-form-item label="Date Of Join">
                        <el-col>
                            <el-date-picker type="date" value-format="yyyy/MM/dd" placeholder="pick a date"
                                v-model="form.date"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <!-- gender -->
                    <el-form-item label="Select Gender">
                        <el-select v-model="form.gender" type="string" placeholder="selecet gender">
                            <el-option label="Male" value="male"></el-option>
                            <el-option label="Female" value="female"></el-option>
                            <el-option label="Transgender" value="transgender"></el-option>
                        </el-select>
                    </el-form-item>

                    <!-- mobile no -->
                    <el-form-item label="Mobile Number" prop="mobileno">
                        <el-input v-model.number="form.mobileno" placeholder="mobile number" maxlength="10"></el-input>
                    </el-form-item>

                    <!-- address -->
                    <el-form-item label="Address">
                        <el-input v-model="form.address" placeholder="address"></el-input>
                    </el-form-item>

                    <el-form-item label="Skill" prop="skill">

                        <el-checkbox-group v-model="form.skill">
                            <el-checkbox label="js"></el-checkbox>
                            <el-checkbox label="python"></el-checkbox>
                            <el-checkbox label="php"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>

                    <!-- native select -->
                    <el-form-item label='nativestate'>
                        <el-select v-model="form.state">
                            <el-option v-for="item in nativeState" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <!-- button -->

                    <el-form-item inline="true">

                        <el-button type="primary" @click="cancel">cancel</el-button>

                        <el-button type="success" @click="submitForm('form')" v-if="isconfirm">create</el-button>
                        <el-button type="success" @click="update('form')" v-else-if="isedit">update</el-button>

                    </el-form-item>

                </el-form>
            </el-dialog>

        </div>

        <!-- TABLE -->
        <div class="size">
            <template>

                <el-table :data="tabledata" style="width:100%" border>
                    <el-table-column prop="name" label="Name" width="160px">
                    </el-table-column>
                    <el-table-column prop="empid" label="Emp id" width="150">
                    </el-table-column>
                    <el-table-column prop="age" label="Age" width="150">
                    </el-table-column>
                    <el-table-column prop="date" label="Date" width="180">
                    </el-table-column>
                    <el-table-column prop="gender" label="Gender" width="150">
                    </el-table-column>
                    <el-table-column prop="mobileno" label="Mobileno" width="150">
                    </el-table-column>
                    <el-table-column prop="address" align="Center" id="move" label="Address" width="400">
                    </el-table-column>
                    <el-table-column prop="skill" label="Skill" width="200">
                    </el-table-column>
                    <el-table-column prop="state" label="State" width="">
                    </el-table-column>
                    <el-table-column width="" label="More">
                        <template slot-scope="scope">
                            <el-button @click="delete1(scope.$index, tableData)" type="text" size="small">
                                <i class="el-icon-delete"></i>

                                <!-- edit button -->
                            </el-button>
                            <el-button @click="edit(scope.$index, tableData)" type="text" size="small">
                                <i class="el-icon-edit"></i>
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </template>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Helloworld',

    data() {
        return {
            nativeState: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
                'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala',
            ],
            tabledata: [],
            objcopy: {},

            isedit: true,
            isconfirm: true,
            value: 0,

            dialogFormVisible: false,
            form: {
                name: '',
                age: '',
                empid: '',
                date: '',
                gender: '',
                mobileno: '',
                address: '',
                skill: [],
                state: ''
            },

            rules: {
                name: [{
                    required: true,
                    message: 'Requird name',
                    trigger: 'blur'
                }],
                age: [{
                    required: true,
                    message: 'Required age',
                    trigger: 'blur'
                }],
                empid: [{
                    required: true,
                    message: 'Requird emp id',
                    trigger: 'blur'
                },

                ],
                mobileno: [{
                    type: 'number',
                    required: true,
                    pattern: '^+234[0-9]{10}$',

                    message: 'Required mobile no',
                    trigger: 'blur'
                }]
                // skill: [{
                // required: true,
                // message: 'Select skill',
                // trigger: 'blur',

                // }],

            }

        }
    },
    mounted() {
        // console.log('localstorage', localStorage.getItem('tabledata'))
        if (localStorage.getItem('tabledata')) {
            this.tabledata = JSON.parse(localStorage.getItem('tabledata'))

        }
    },

    methods: {
        // dialogformvisible operation
        dialogFormVisibleButton() {
            this.dialogFormVisible = true
            this.isconfirm = true

        },
        //load the data in table (SUBMIT)
        submitForm(formName) {
            // this.$refs[formName].validate((valid) => {
            //     if (valid) {
            alert('submit!');
            this.dialogFormVisible = false

            this.addLocal()

            // } else {
            //     console.log('error submit!!');
            // }

            // });
        },
        savedata() {
            const parsed = JSON.stringify(this.tabledata)
            localStorage.setItem('tabledata', parsed)

        },
        addLocal() {
            alert('no')
            this.tabledata.push(this.form)
            this.savedata()
            this.handleCancel()

        },

        edit(index) {
            this.value = index
            this.isconfirm = false
            this.dialogFormVisible = true
            this.objcopy = Object.assign({}, this.tabledata[index])
            this.form = this.objcopy
        },
        update(formName) {

            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    this.dialogFormVisible = false
                    this.tabledata.splice(this.value, 1, this.form);
                    this.form = {}
                    this.obj1 = {}
                    this.savedata()
                    this.handleCancel()

                }
            })
        },
        // create() {

        // const obj = {

        // name: this.form.name,
        // age: this.form.age,
        // empid: this.form.empid,
        // date: this.form.date,
        // gender: this.form.gender,
        // mobileno: this.form.mobileno,
        // address: this.form.address,
        // skill: this.form.skill,
        // state: this.form.state,
        // }
        // this.tabledata.push(obj)
        // this.cancel()

        // },
        // remove row 
        // removeRow: function (index) {
        // console.log('index', index)
        // this.delete(index)

        // },
        delete1(index) {
            this.$confirm('are you sure your data will be delete?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'warning',
                    message: 'Delete completed'

                })
                this.localstoragedelete(index)

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Delete canceled'
                });
            });
        },
        localstoragedelete(index) {
            this.tabledata.splice(index, 1)
            this.savedata()

        },
        //clear the form after create the row
        cancel() {
            this.dialogFormVisible = false
            this.handleCancel()
        },
        handleCancel() {

            this.form = {
                name: '',
                age: '',
                empid: '',
                date1: '',
                gender: '',
                mobileno: '',
                address: '',
                skill: [],
                state: ''
            }
            // this.$refs['form'].resetFields();

        },

    },

}
</script>

<style>
.name {
    display: inline-block;
    width: 50%;
}

.size {
    width: 100%
}
</style>

