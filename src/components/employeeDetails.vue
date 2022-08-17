<template>
    <!-- <div>
        <h1>Hiiii</h1>
    </div> -->
    <div>
        <el-form>

            <div class="demo-input-size">
                <h3 style align="center">Employee Details</h3>

                <el-form ref="form" :inline="true">
                    <el-form-item label="First Name">
                        <el-input size="medium" placeholder="Enter First Name" v-model="employeeData.firstName"
                            style="width:300px">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Middle Name">
                        <el-input size="medium" placeholder="Enter First Name" v-model="employeeData.middleName"
                            style="width:300px">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Last Name">
                        <el-input size="medium" placeholder="Enter Last Name" v-model="employeeData.lastName"
                            style="width:300px">
                        </el-input>
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
            <el-button style="margin-top: 40px;" @click="submit">Submit</el-button>


        </el-form>
        <router-view></router-view>

    </div>

</template>


<script>

export default {
    name: 'employeeDetails',
    data() {
        return {
            employeeData: {
                firstName: '',
                middleName: '',
                lastName: '',
                dob: '',
                gender: 3,
                address: '',
                mobile: '',
                email: '',

            },
            storedEmployeeData: [],
            active: 0
        }
    },
    methods: {
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
                })
            return console.log(JSON.stringify(this.storedEmployeeData));

        }
    },
    mounted() {
        console.log('hiiiiiiiiiiii')
    }
}
</script>