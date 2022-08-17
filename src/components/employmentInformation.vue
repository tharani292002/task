<template>
    <div>
        <el-form>
            <div>
                <h3 style align="center">Employment Information</h3>
                </br>

                <p>Employee ID</p>
                <el-input placeholder="Enter Your ID" style="width:450px" v-model="employmentInformation.id"></el-input>
            </div>
            </br>
            <div class="block">
                <div style align="left"></div>
                <span class="demonstration">Date of Joining </span>
                <el-date-picker v-model="employmentInformation.dateOfJoining" type="date" placeholder="yyyy-mm-dd">
                </el-date-picker>
            </div>
            </br>
            <div>
                <p>Designation</p>
                <el-select v-model="employmentInformation.designation" placeholder="Select Your Designation">
                    <el-option v-for="item in des" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </br>
            <div>
                <p>Previous Experiance</p>
                <el-select v-model="employmentInformation.previousExperience" placeholder="Select Your Experiance">
                    <el-option v-for="item in options" :key="item.val" :label="item.label" :value="item.val">
                    </el-option>
                </el-select>
            </div>
            <br />
            <div>
                <p>Salary</p>
                <el-input placeholder="Enter Your Salary" style="width:150px" v-model="employmentInformation.salary">
                </el-input>
            </div>
            <br />
            <div>
                <p>Employment Type</p>
                <el-radio v-model="employmentInformation.employmentHours" label="FullTime">Full Time</el-radio>
                <el-radio v-model="employmentInformation.employmentHours" label="PartTime">Part Time</el-radio>

            </div>
            <br />
            <div>
                <p>Employment Status</p>
                <el-radio v-model="employmentInformation.employmentStatus" label="Permanent">Permanent</el-radio>
                <el-radio v-model="employmentInformation.employmentStatus" label="Casual">Casual</el-radio>

            </div>

            <br />

            <el-button style="margin-top: 40px;" @click="submit">Submit</el-button>


        </el-form>

    </div>
</template>


<script>
export default {
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

            employmentInformation: {

                id: '',
                dateOfJoining: '',

                designation: '',


                previousExperience: '',

                salary: '',
                employmentHours: 'FullTime',
                employmentStatus: 'Permanent',
            },
            storedEmployeeData: [],
            active: 0,
            // employmentHours: 'FullTime',
            // employmentStatus: 'Permanent',
        }
    },
    methods: {
        submit() {
            this.storedEmployeeData.push(
                {

                    id: this.employmentInformation.id,
                    dateOfJoining: this.employmentInformation.dateOfJoining,
                    designation: this.employmentInformation.designation,
                    previousExperience: this.employmentInformation.previousExperience,
                    salary: this.employmentInformation.salary,
                    employmentHours: this.employmentInformation.employmentHours,
                    employmentStatus: this.employmentInformation.employmentStatus,
                })

            return console.log(JSON.stringify(this.storedEmployeeData));

        }
    }
}


</script>