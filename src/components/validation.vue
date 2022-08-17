<template>
    <div>
        <el-steps :active="active" finish-status="success">
            <el-step title="Step 1" @click.native="active = 0"></el-step>


            <el-step title="Step 2" @click.native="active = 1"></el-step>
            <el-step title="Step 3" @click.native="active = 2"></el-step>
        </el-steps>


        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" v-if="active === 0">

            <div class="demo-input-size">
                <h3 style align="center">Employee Details</h3>
                </br>

                <el-form ref="form" :inline="true">
                    <el-form-item prop="firstName" label="First Name">
                        <el-input size="medium" placeholder="Enter First Name" v-model="employeeData.firstName"
                            style="width:300px">
                        </el-input>
                        {{ input }}
                    </el-form-item>

                    <el-form-item prop="middleName" label="Middle Name">
                        <el-col :span="11">
                            <el-input size="medium" placeholder="Enter First Name" v-model="employeeData.middleName"
                                style="width:300px">
                            </el-input>
                        </el-col>
                    </el-form-item>

                    <el-form-item prop="lastName" label="Last Name">
                        <el-col :span="11">

                            <el-input size="medium" placeholder="Enter Last Name" v-model="employeeData.lastName"
                                style="width:300px">
                            </el-input>
                        </el-col>
                    </el-form-item>




                    <el-form-item :inline="true" prop="dob">
                        <div class="block">
                            <div style align="left"></div>
                            <span class="demonstration">DOB </span>
                            <el-date-picker v-model="employeeData.dob" type="date" placeholder="yyyy-mm-dd">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                    <br />
                    <el-form-item prop="gender">

                        <p>Gender</p>


                        <div>
                            <el-radio-group v-model="employeeData.gender">
                                <el-radio :label="3">Male</el-radio>
                                <el-radio :label="6">Female</el-radio>
                                <el-radio :label="9">Others</el-radio>
                            </el-radio-group>
                        </div>
                    </el-form-item>
                    <el-form-item prop="address">

                        <div>

                            <p>Address</p>
                            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" style="width:700px"
                                placeholder="Enter Your Permanent Address" v-model="employeeData.address">
                            </el-input>

                        </div>
                    </el-form-item>
                    <br />
                    <el-form-item prop="mobile">

                        <div>
                            <p>Mobile Number</p>
                            <el-input type="text" placeholder="Enter Mobile Number" v-model.number="employeeData.mobile"
                                style="width:250px" maxlength="10" show-word-limit>
                            </el-input>

                        </div>
                    </el-form-item>
                    <el-form-item prop="email">

                        <div>
                            <p>Email ID</p>
                            <el-input placeholder="Enter Email ID" style="width:450px" v-model="employeeData.email">
                                <template slot="append">@gmail.com</template>
                            </el-input>
                        </div>
                    </el-form-item>

                </el-form>
        </el-form>
    </div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" v-if="active === 1">

        <div>


            <h3 style align="center">Employment Information</h3>
            </br>
            <el-form-item prop="id">


                <p>Employee ID</p>
                <el-input placeholder="Enter Your ID" style="width:450px" v-model="employeeData.id"></el-input>
            </el-form-item>
        </div>

        </br>
        <el-form-item prop="dateOfJoining">

            <div class="block">
                <div style align="left"></div>
                <span class="demonstration">Date of Joining </span>
                <el-date-picker v-model="employeeData.dateOfJoining" type="date" placeholder="yyyy-mm-dd">
                </el-date-picker>
            </div>
        </el-form-item>
        </br>
        <el-form-item prop="designation">

            <div>
                <p>Designation</p>
                <el-select v-model="employeeData.designation" placeholder="Select Your Designation">
                    <el-option v-for="item in des" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </el-form-item>
        <el-form-item prop="previousExperience">
            <div>
                <p>Previous Experiance</p>
                <el-select v-model="employeeData.previousExperience" placeholder="Select Your Experiance">
                    <el-option v-for="item in options" :key="item.val" :label="item.label" :value="item.val">
                    </el-option>
                </el-select>
            </div>
        </el-form-item>
        <br />

        <el-form-item prop="salary">

            <div>
                <p>Salary</p>
                <el-input placeholder="Enter Your Salary" style="width:150px" v-model="employeeData.salary">
                </el-input>
            </div>
        </el-form-item>
        <br />

        <el-form-item prop="employmentHours">

            <div>
                <p>Employment Type</p>
                <el-radio v-model="employeeData.employmentHours" label="FullTime">Full Time</el-radio>
                <el-radio v-model="employeeData.employmentHours" label="PartTime">Part Time</el-radio>

            </div>
        </el-form-item>
        <br />

        <el-form-item prop="employmentStatus">

            <div>
                <p>Employment Status</p>
                <el-radio v-model="employeeData.employmentStatus" label="Permanent">Permanent</el-radio>
                <el-radio v-model="employeeData.employmentStatus" label="Casual">Casual</el-radio>
            </div>

        </el-form-item>
        <br />

    </el-form>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" v-if="active === 2">
        <div>
            <h3 style align="center">Bank Details</h3>
        </div>
        <el-form-item prop="accountNumber">
            <div>
                <p>Account Number</p>
                <el-input placeholder="Enter Your Account Number" style="width:300px"
                    v-model="employeeData.accountNumber">
                </el-input>
            </div>
        </el-form-item>
        <el-form-item prop="bank">
            <div>
                <p>Bank Name</p>
                <el-autocomplete v-model="employeeData.bank" :fetch-suggestions="querySearchAsync"
                    placeholder="Please input" @select="handleSelect"></el-autocomplete>
            </div>
        </el-form-item>
        <el-form-item prop="branch">
            <div>
                <p>Branch name</p>
                <el-input placeholder="Enter Your Branch Name" style="width:500px" v-model="employeeData.branch">
                </el-input>
            </div>
        </el-form-item>
        <el-form-item prop="ifsc">
            <div>
                <p>IFSC Code</p>
                <el-input type="text" placeholder="Enter IFSC Code" style="width:200px" v-model="employeeData.ifsc"
                    maxlength="4" show-word-limit>
                </el-input>
            </div>
        </el-form-item>
        <el-button style="margin-top: 40px;" @click="submit('employeeData')">Submit</el-button>
    </el-form>

    <el-button style="margin-top: 40px;" @click="back('employeeData')">Back</el-button>
    <el-button style="margin-top: 12px" @click="next('employeeData')">Next step</el-button>





    </div>

</template>

<script>
export default {

    data() {
        var checkNumber = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('Please input the Mobile Number'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('Please input digits'));
                }
                else {
                    callback();
                }

            }, 1000);
        }

        return {
            des: [{
                value: 'Option1',
                label: 'Developer'
            }, {
                value: 'Option2',
                label: 'Tester'
            }, {
                value: 'Option3',
                label: 'Business Analysts'
            }, {
                value: 'Option4',
                label: 'Data Scientist'
            }, {
                value: 'Option5',
                label: 'Quality Analyst'
            }],
            options: [{
                val: 'Option1',
                label: '0 to 6 months'
            }, {
                val: 'Option2',
                label: '1 year'
            }, {
                val: 'Option3',
                label: '2 years'
            }, {
                val: 'Option4',
                label: '3 years'
            }, {
                val: 'Option5',
                label: '4 years'
            }, {
                val: 'option 6',
                label: '5 years'
            }, {
                val: 'option 7',
                label: '6 years'
            }, {
                val: 'option 8',
                label: '7 years'
            }, {
                val: 'option 9',
                label: '8 years'
            },
            {
                val: 'option 10',
                label: '9 years'
            }, {
                val: 'option 11',
                label: '10 years'
            }],

            employeeData: {
                firstName: '',
                middleName: '',
                lastName: '',
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




                accountNumber: '',    //account number
                links: [],
                bank: '',            //bank name
                timeout: null,
                branch: '',
                ifsc: ''
            },

            rules: {
                firstName: [
                    { required: true, message: 'Please input First name', trigger: 'blur' },

                ],
                middleName: [
                    { required: true, message: 'Please input Middle name', trigger: 'blur' },

                ],
                lastName: [
                    { required: true, message: 'Please input Last name', trigger: 'blur' },

                ],
                dob: [
                    { type: 'date', required: true, message: 'Please pick a DOB', trigger: 'change' }

                ],
                gender: [
                    { required: true, message: 'Please pick one', trigger: 'change' },

                ],
                address: [
                    { required: true, message: 'Please input Address', trigger: 'blur' },

                ],
                mobile: [
                    { required: true, message: 'Please input Mobile Number', trigger: 'blur' },

                ],
                email: [
                    { required: true, message: 'Please input email address', trigger: 'blur' },
                    { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                ],
                id: [
                    { required: true, message: 'Please input id', trigger: 'blur' },

                ],
                dateOfJoining: [
                    { type: 'date', required: true, message: 'Please pick DOJ', trigger: 'change' }

                ],
                designation: [
                    { required: true, message: 'Please pick one from below options', trigger: 'change' }

                ],
                previousExperience: [
                    { required: true, message: 'Please pick Experiance from below options', trigger: 'change' }

                ],
                salary: [
                    { required: true, message: 'Please input salary', trigger: 'change' }

                ],
                employmentHours: [
                    { required: true, message: 'Please pick one', trigger: 'change' }

                ],
                employmentStatus: [
                    { required: true, message: 'Please pick one', trigger: 'change' }

                ],
                accountNumber: [
                    { required: true, message: 'Please input Account number', trigger: 'change' }

                ],
                bank: [
                    { required: true, message: 'Please select Bank name', trigger: 'change' }

                ],
                branch: [
                    { required: true, message: 'Please input Branch name', trigger: 'change' }

                ],
                ifsc: [
                    { required: true, message: 'Please input IFSC Number', trigger: 'change' }

                ]
            },
            storedEmployeeData: [],
            active: 0

        }
    },
    methods: {

        next() {
            console.log(',,,,,,,,,,,,')
            if (this.active++ > 2) this.active = 0;
        },
        back() {
            console.log(',,,,,,,,,,,,')
            if (this.active-- < 2) this.active = 0;
        },



        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });



        submit(formName) {
            this.storedEmployeeData.push(
                {
                    firstName: this.employeeData.firstName,
                    lastName: this.employeeData.lastName,
                    middleName: this.employeeData.middleName,
                    dob: this.employeeData.dob,
                    gender: this.employeeData.gender,
                    address: this.employeeData.address,
                    mobile: this.employeeData.mobile,
                    email: this.employeeData.email,
                    id: this.employeeData.id,
                    dateOfJoining: this.employeeData.dateOfJoining,
                    designation: this.employeeData.designation,
                    previousExperience: this.employeeData.previousExperience,
                    salary: this.employeeData.salary,
                    employmentHours: this.employeeData.employmentHours,
                    employmentStatus: this.employeeData.employmentStatus,
                    accountNumber: this.employeeData.accountNumber,
                    bank: this.employeeData.bank,
                    branch: this.employeeData.branch,
                    ifsc: this.employeeData.ifsc
                }
            )
            this.$refs[formName].validate((valid) => {
                if (valid) {

                    return console.log(JSON.stringify(this.storedEmployeeData));

                }
                else {
                    console.log('error submit!!');

                }

            }),

                loadAll() {
                return [
                    { "value": "Bank of Baroda" },
                    { "value": "Bank of India" },
                    { "value": "Canara Bank" },
                    { "value": "Central Bank of India" },
                    { "value": "Indian Bank" },
                    { "value": "Indian Overseas Bank" },
                    { "value": "HDFC" }
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
            }
        },
        mounted() {
            this.links = this.loadAll();
        }

    }
}
</script>