<!-- <template>
    <div>
        <div class="uuid-panel">
            <h3 class="uuid">{{ uuid }}</h3>
            <button class="button" @click="uuid = $uuid.v1()">Generate V1</button>
            <button class="button" @click="uuid = $uuid.v3()">Generate V3</button>
            <button class="button" @click="uuid = $uuid.v4()">Generate V4</button>
            <button class="button" @click="uuid = $uuid.v5(" Name 1", NAMESPACE)">Generate V5</button>
        </div>
    </div>
</template>

<script>
// import { uuidv4 } from 'vue-uuid'; // uuid object is also exported to things
// outside Vue instance.

import { v4 as uuidv4 } from 'uuid';
uuidv4();

const NAMESPACE = "65f9af5d-f23f-4065-ac85-da725569fdcd";

export default {
    data() {
        return {
            NAMESPACE,
            uuidv4: uuidv4.v1(),
            v1: this.$uuidv4.v1(),
            v3: this.$uuidv4.v3(),
            v4: this.$uuidv4.v4(),
            v5: this.$uuidv4.v5("Name 2", NAMESPACE)
        };
    }
};
</script> -->

<template>
    <div>
        <el-button ref="but" style="float:right" type="success" @click="showDialog()">Add</el-button>
        <div class="name">
            <el-dialog title="Enter Employee Information" v-if="dialogFormVisible" :visible.sync="dialogFormVisible">
                <el-form :inline=true :model="employeeData" ref="employeeData" :rules="rules" label-width="200px"
                    class="demo-ruleForm">
                    <h3 style align="center">Employee Details</h3>
                    <br />
                    <!-- <el-form-item prop="u_id" label=" ID">
                        <el-input size="medium" placeholder="Enter Name" v-model="employeeData.u_id"
                            style="width:200px">
                        </el-input>
                    </el-form-item> <br /> -->
                    <el-form-item prop="name" label=" Name">
                        <el-input size="medium" placeholder="Enter Name" v-model="employeeData.name"
                            style="width:200px">
                        </el-input>
                    </el-form-item> <br />
                    <el-form-item prop="dob" label="DOB">
                        <!-- <div style align="left"></div> -->
                        <!-- <span class="demonstration">DOB </span> -->
                        <el-date-picker v-model="employeeData.dob" type="date" value-format="dd/MM/yyyy"
                            placeholder="yyyy-mm-dd">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item prop="gender" label="Gender">
                        <el-radio-group v-model="employeeData.gender">
                            <el-radio label="Male"></el-radio>
                            <el-radio label="Female"></el-radio>
                            <el-radio label="Others"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item prop="address" label="Address">
                        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" style="width:300px"
                            placeholder="Enter Your Permanent Address" v-model="employeeData.address">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="mobile" label="Mobile Number">
                        <el-input placeholder="Enter Mobile Number" v-model.number="employeeData.mobile"
                            style="width:250px" maxlength="10" show-word-limit>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="email" label="Email">
                        <el-input placeholder="Enter Email ID" style="width:300px" v-model="employeeData.email">
                            <!-- <template slot="append">@gmail.com</template> -->
                        </el-input>
                    </el-form-item>
                    <br />
                    <h3 style align="center">Employment Information</h3>
                    <br />
                    <el-form-item prop="id" label="Employee ID">
                        <el-input placeholder="Enter Your ID" style="width:300px" v-model="employeeData.id"></el-input>
                    </el-form-item>
                    <el-form-item prop="dateOfJoining" label="Date of Joining">
                        <!-- <div style align="left"></div>
                <span class="demonstration">Date of Joining </span> -->
                        <el-date-picker v-model="employeeData.dateOfJoining" type="date" value-format="dd/MM/yyyy"
                            placeholder="yyyy-mm-dd">
                        </el-date-picker>

                    </el-form-item>
                    <el-form-item prop="designation" label="Designation">
                        <el-select v-model="employeeData.designation" style="width:300px"
                            placeholder="Select Your Designation">
                            <el-option v-for="(item, index) in des" :key="index" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="" label="Previous Experiance">
                        <el-select v-model="employeeData.previousExperience" style="width:300px"
                            placeholder="Select Your Experiance">
                            <el-option v-for="(item, index) in options " :key="index" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <br />
                    <el-form-item prop="salary" label="Salary">
                        <el-input placeholder="Enter Your Salary" style="width:200px" v-model="employeeData.salary">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="employmentHours" label="Employment Type">
                        <el-radio v-model="employeeData.employmentHours" label="FullTime">Full Time</el-radio>
                        <el-radio v-model="employeeData.employmentHours" label="PartTime">Part Time</el-radio>
                    </el-form-item>
                    <el-form-item prop="employmentStatus" label="Employment Status">
                        <el-radio v-model="employeeData.employmentStatus" label="Permanent">Permanent</el-radio>
                        <el-radio v-model="employeeData.employmentStatus" label="Casual">Casual</el-radio>
                    </el-form-item>
                    <br />
                    <h3 style align="center">Bank Details</h3>
                    <br />
                    <el-form-item prop="accountNumber" label="Account Number">

                        <el-input placeholder="Enter Your Account Number" style="width:300px"
                            v-model="employeeData.accountNumber">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="bank" label="Bank Name">
                        <el-autocomplete style="width:300px" v-model="employeeData.bank"
                            :fetch-suggestions="querySearchAsync" placeholder="Please input" @select="handleSelect">
                        </el-autocomplete>
                    </el-form-item>
                    <el-form-item prop="branch" label="Branch Name">
                        <el-input placeholder="Enter Your Branch Name" style="width:300px"
                            v-model="employeeData.branch">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="ifsc" label="IFSC Code">
                        <el-input type="text" placeholder="Enter IFSC Code" style="width:200px"
                            v-model="employeeData.ifsc" maxlength="4" show-word-limit>
                        </el-input>
                        <br />
                    </el-form-item>
                    <!-- button -->
                    <br />
                    <el-form-item :inline=true>
                        <el-button style="float:right" type="primary" @click="handleCancel()">cancel</el-button>
                        <el-button type="success" @click="submitForm()" v-if="isconfirm">create
                        </el-button>
                        <el-button type="success" @click="update()" v-else-if="isedit">update</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
        <!-- table -->
        <div class="size">
            <template>
                <el-table :data="tableData" style="width: 100%" max-height="250">
                    <el-table-column label="Employee Details">
                        <el-table-column prop="u_id" label="ID" width="150">
                        </el-table-column>
                        <el-table-column prop="name" label="Name" width="150">
                        </el-table-column>
                        <el-table-column prop="dob" label="DOB" width="120">
                        </el-table-column>
                        <el-table-column prop="gender" label="Gender" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="Address" width="300">
                        </el-table-column>
                        <el-table-column prop="mobile" label="Mobile" width="100">
                        </el-table-column>
                        <el-table-column prop="email" label="Email" width="220">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="Employment Information">
                        <el-table-column prop="id" label="Employee ID" width="150">
                        </el-table-column>
                        <el-table-column prop="dateOfJoining" label="Date of Joining" width="120">
                        </el-table-column>
                        <el-table-column prop="designation" label="Designation" width="120">
                        </el-table-column>
                        <el-table-column prop="previousExperience" label="Previous Experiance" width="150">
                        </el-table-column>
                        <el-table-column prop="salary" label="Salary" width="70">
                        </el-table-column>
                        <el-table-column prop="employmentHours" label="Employment Type" width="150">
                        </el-table-column>
                        <el-table-column prop="employmentStatus" label="Employment Status" width="150">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="Bank Details">
                        <el-table-column prop="accountNumber" label="Account Number" width="150">
                        </el-table-column>
                        <el-table-column prop="bank" label="Bank" width="120">
                        </el-table-column>
                        <el-table-column prop="branch" label="Branch" width="120">
                        </el-table-column>
                        <el-table-column prop="ifsc" label="IFSC" width="300">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column fixed="right" width="" label="More">
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
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
export default {
    name: 'project1-vue',
    data() {
        var checkNumber = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('Please input the Mobile Number'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('Please input digits'));
                } else {
                    callback();
                }

            }, 1000);
        }
        return {
            tableData: [],
            objcopy: {},
            isedit: true,
            isconfirm: true,
            value: 0,
            dialogFormVisible: false,
            des: ['Developer', 'Tester', 'Business Analysts', 'Data Scientist', 'Quality Analyst'],
            options: ['0 to 6 months', '1 year', '2 years', '3 years', '4 years', '5 years', '6 years', '7 years', '8 years', '9 years', '10 years'],
            employeeData: {
                u_id: '',
                name: '',
                dob: '',
                gender: 1,
                address: '',
                mobile: '',
                email: '',
                id: '',
                dateOfJoining: '',
                designation: '',
                previousExperience: '',
                salary: '',
                employmentHours: '',
                employmentStatus: '',
                accountNumber: '', //account number
                //links: [],
                bank: '', //bank name
                timeout: '',
                branch: '',
                ifsc: ''
            },
            mode: '',
            rules: {
                u_id: [{
                    required: true,
                    message: 'Please input  id',
                    trigger: 'blur'
                }], name: [{
                    required: true,
                    message: 'Please input  name',
                    trigger: 'blur'
                }],
                dob: [{
                    required: true,
                    message: 'Please pick a DOB',
                    trigger: 'change'
                }],
                gender: [{
                    required: true,
                    message: 'Please pick one',
                    trigger: 'blur'
                }],
                address: [{
                    required: true,
                    message: 'Please input Address',
                    trigger: 'blur'
                }],
                mobile: [{
                    required: true,
                    validator: checkNumber,
                    message: 'Please input Mobile Number',
                    trigger: 'blur'
                }],
                email: [{
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur'
                },
                {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change']
                }
                ],
                id: [{
                    required: true,
                    message: 'Please input id',
                    trigger: 'blur'
                }],
                dateOfJoining: [{
                    required: true,
                    message: 'Please pick DOJ',
                    trigger: 'change'
                }],
                designation: [{
                    required: true,
                    message: 'Please pick one from below options',
                    trigger: 'change'
                }],
                previousExperience: [{
                    required: true,
                    message: 'Please pick Experiance from below options',
                    trigger: 'change'
                }],
                salary: [{
                    required: true,
                    message: 'Please input salary',
                    trigger: 'blur'
                }],
                employmentHours: [{
                    required: true,
                    message: 'Please pick one',
                    trigger: 'change'
                }],
                employmentStatus: [{
                    required: true,
                    message: 'Please pick one',
                    trigger: 'change'
                }],
                accountNumber: [{
                    required: true,
                    message: 'Please input Account number',
                    trigger: 'change'
                }],
                bank: [{
                    required: true,
                    message: 'Please select Bank name',
                    trigger: 'change'
                }],
                branch: [{
                    required: true,
                    message: 'Please input Branch name',
                    trigger: 'change'
                }],
                ifsc: [{
                    required: true,
                    message: 'Please input IFSC Number',
                    trigger: 'change'
                }]
            },
        }
    },
    mounted() {
        if (localStorage.getItem('tableData')) {
            this.tableData = JSON.parse(localStorage.getItem('tableData'))
        }
        this.links = this.loadAll();
    },
    methods: {
        showDialog() {

            this.dialogFormVisible = true
        },
        loadAll() {
            return [{
                "value": "Bank of Baroda"
            },
            {
                "value": "Bank of India"
            },
            {
                "value": "Canara Bank"
            },
            {
                "value": "Central Bank of India"
            },
            {
                "value": "Indian Bank"
            },
            {
                "value": "Indian Overseas Bank"
            },
            {
                "value": "HDFC"
            }
            ];
        },

        querySearchAsync(queryString, cb) {
            var links = this.links;
            var results = queryString ? links.filter(this.createFilter(queryString)) : links;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createFilter(queryString) {
            return (link) => {
                return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        },
        dialogFormVisibleButton() {
            this.dialogFormVisible = true
            this.isconfirm = true

        },
        //load the data in table (SUBMIT)
        submitForm() {
            this.$refs.employeeData.validate((valid) => {
                if (valid) {
                    this.employeeData.u_id = uuidv4()
                    const tempObj = _.cloneDeep(this.employeeData)
                    this.tableData.push(tempObj)
                    localStorage.setItem('tableData', this.tableData)
                    this.savedata()
                    this.edit()
                    this.dialogFormVisible = false
                    this.$refs.employeeData.resetFields()
                } else {
                    console.log('error submit!!');
                }

            });
        },
        savedata() {
            const parsed = JSON.stringify(this.tableData)
            localStorage.setItem('tableData', parsed)

        },

        addLocal() {
            // alert('no')

            this.showDialog()
            this.employeeData.u_id = uuidv4()
            this.tableData.push(this.employeeData)
            this.savedata()
            this.handleCancel()
            // this.edit()
            // this.showDialog(this.form)
            this.dialogFormVisible = true
            this.$refs.employeeData.resetFields()

        },
        edit(index) {
            this.value = index
            this.isconfirm = false
            this.dialogFormVisible = true
            this.objcopy = JSON.parse(JSON.stringify(this.tableData[index]))
            this.employeeData = this.objcopy
            // this.update()
            // this.tableData.splice(this.value, 1, this.employeeData)
            // localStorage.setItem("tableData", JSON.stringify(this.tableData))
            // this.dialogFormVisible = false
        },
        update() {

            this.isedit = true
            const tempObj = _.cloneDeep(this.employeeData)
            this.tableData.splice(this.value, 1, tempObj)
            localStorage.setItem("tableData", JSON.stringify(this.tableData))
            this.dialogFormVisible = false
            this.$refs['employeeData'].resetFields()
        },
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
            this.tableData.splice(index, 1)
            this.savedata()

        },
        //clear the form after create the row
        // cancel() {
        //     this.dialogFormVisible = false
        //     this.handleCancel()
        // },
        handleCancel() {
            this.dialogFormVisible = false
            this.form = {
                name: '',
                dob: '',
                gender: 3,
                address: '',
                mobile: '',
                email: '',
                id: '',
                dateOfJoining: '',
                designation: '',
                previousExperience: '',
                salary: '',
                employmentHours: 1,
                employmentStatus: 1,
                accountNumber: '', //account number
                //links: [],
                bank: '', //bank name
                timeout: null,
                branch: '',
                ifsc: ''
            }
        },

    }
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
