<template>
    <div>
        <el-steps :active="active" finish-status="success">
            <el-step title="Step 1" @click.native="active = 0"></el-step>


            <el-step title="Step 2" @click.native="active = 1"></el-step>
            <el-step title="Step 3" @click.native="active = 2"></el-step>
        </el-steps>


        <el-form label-width="100px" v-if="active === 0">

            <div class="demo-input-size">
                <h3 style align="center">Employee Details</h3>
                </br>

                <el-form ref="form" :inline="true">
                    <el-form-item label="First Name">
                        <el-input size="medium" placeholder="Enter First Name" v-model="employeeData.firstName"
                            style="width:300px">
                        </el-input>
                        {{ input }}
                    </el-form-item>

                    <el-form-item label="Middle Name">
                        <el-col :span="11">
                            <el-input size="medium" placeholder="Enter First Name" v-model="employeeData.middleName"
                                style="width:300px">
                            </el-input>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="Last Name">
                        <el-col :span="11">

                            <el-input size="medium" placeholder="Enter Last Name" v-model="employeeData.lastName"
                                style="width:300px">
                            </el-input>
                        </el-col>
                    </el-form-item>

                </el-form>
            </div>
            <br />
            <br />


            <div class="block">
                <div style align="left"></div>
                <span class="demonstration">DOB </span>
                <el-date-picker v-model="employeeData.dob" type="date" placeholder="yyyy-mm-dd">
                </el-date-picker>
            </div>
            <br />
            <p>Gender</p>


            <div>
                <el-radio-group v-model="employeeData.gender">
                    <el-radio :label="3">Male</el-radio>
                    <el-radio :label="6">Female</el-radio>
                    <el-radio :label="9">Others</el-radio>
                </el-radio-group>
            </div>
            <div>
                <p>Address</p>
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" style="width:700px"
                    placeholder="Enter Your Permanent Address" v-model="employeeData.address">
                </el-input>
            </div>
            <br />

            <div>
                <p>Mobile Number</p>
                <el-input type="text" placeholder="Enter Mobile Number" v-model="employeeData.mobile"
                    style="width:250px" maxlength="10" show-word-limit>
                </el-input>

            </div>
            <div>
                <p>Email ID</p>
                <el-input placeholder="Enter Email ID" style="width:450px" v-model="employeeData.email">
                    <template slot="append">@gmail.com</template>
                </el-input>
            </div>

        </el-form>

        <el-form v-if="active === 1">

            <div>


                <h3 style align="center">Employment Information</h3>
                </br>

                <p>Employee ID</p>
                <el-input placeholder="Enter Your ID" style="width:450px" v-model="employeeData.id"></el-input>
            </div>
            </br>
            <div class="block">
                <div style align="left"></div>
                <span class="demonstration">Date of Joining </span>
                <el-date-picker v-model="employeeData.dateOfJoining" type="date" placeholder="yyyy-mm-dd">
                </el-date-picker>
            </div>
            </br>
            <div>
                <p>Designation</p>
                <el-select v-model="employeeData.designation" placeholder="Select Your Designation">
                    <el-option v-for="item in des" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </br>
            <div>
                <p>Previous Experiance</p>
                <el-select v-model="employeeData.previousExperience" placeholder="Select Your Experiance">
                    <el-option v-for="item in options" :key="item.val" :label="item.label" :value="item.val">
                    </el-option>
                </el-select>
            </div>
            <br />
            <div>
                <p>Salary</p>
                <el-input placeholder="Enter Your Salary" style="width:150px" v-model="employeeData.salary">
                </el-input>
            </div>
            <br />
            <div>
                <p>Employment Type</p>
                <el-radio v-model="employeeData.employmentHours" label="FullTime">Full Time</el-radio>
                <el-radio v-model="employeeData.employmentHours" label="PartTime">Part Time</el-radio>

            </div>
            <br />
            <div>
                <p>Employment Status</p>
                <el-radio v-model="employeeData.employmentStatus" label="Permanent">Permanent</el-radio>
                <el-radio v-model="employeeData.employmentStatus" label="Casual">Casual</el-radio>

            </div>







            <br />

        </el-form>

        <el-form v-if="active === 2">

            <div>
                <h3 style align="center">Bank Details</h3>
                </br>
            </div>
            <div>
                <p>Account Number</p>
                <el-input placeholder="Enter Your Account Number" style="width:300px"
                    v-model="employeeData.accountNumber">
                </el-input>
            </div>
            </br>
            <div>
                <p>Bank Name</p>
                <el-autocomplete v-model="employeeData.bank" :fetch-suggestions="querySearchAsync"
                    placeholder="Please input" @select="handleSelect"></el-autocomplete>
            </div>
            </br>
            <div>
                <p>Branch name</p>
                <el-input placeholder="Enter Your Branch Name" style="width:500px" v-model="employeeData.branch">
                </el-input>
            </div>
            </br>
            <div>
                <p>IFSC Code</p>
                <el-input type="text" placeholder="Enter IFSC Code" style="width:200px" v-model="employeeData.ifsc"
                    maxlength="4" show-word-limit>
                </el-input>

            </div>

            <el-button style="margin-top: 40px;" @click="submit">Submit</el-button>


        </el-form>

        <el-button style="margin-top: 40px;" @click="back">Back</el-button>
        <el-button style="margin-top: 12px" @click="next">Next step</el-button>





    </div>

</template>

<script>
export default {
    name: "employee",
    data() {
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

        submit() {
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
            return console.log(JSON.stringify(this.storedEmployeeData));



        },

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
</script>