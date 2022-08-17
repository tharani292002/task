<template>
    <div>
        <el-button type="success" @click="dialogVisible = true" icon="el-icon-plus" round style="float:right">Add
        </el-button> <br />
        <el-dialog title="Student Data" :visible.sync="dialogVisible" width='70%'>
            <el-form ref="form" :model="form" :rules="rules" label-width="200px">
                <el-form-item label="Student Name: " prop="studentName">
                    <el-input v-model="form.studentName" clearable style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="Student Registration Number:" prop="studentRegistrationNumber">
                    <el-input v-model="form.studentRegistrationNumber" clearable style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="Date Of Birth:" prop="dateOfBirth">
                    <el-date-picker v-model="form.dateOfBirth" type="date" placeholder="Pick a day" format="MM-dd-yyyy"
                        value-format="MM-dd-yyyy">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="Gender:" prop="gender">
                    <el-radio v-model="gender" label="Male">Male</el-radio>
                    <el-radio v-model="gender" label="Female">Female</el-radio>
                </el-form-item>
                <el-form-item label="Phone Number:" prop="phoneNumber">
                    <el-input v-model.number="form.phoneNumber" clearable placeholder="1234567890" maxlength="10"
                        style="width:220px">
                        <template slot="prepend">+91</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="Email:" prop="email">
                    <el-input v-model="form.email" placeholder=' abc@gmail.com' clearable style="width:300px">
                    </el-input>
                </el-form-item>
                <el-form-item label="Medium Of Study:" prop="mediumOfStudy">
                    <el-radio v-model="mediumOfStudy" label="Tamil">Tamil</el-radio>
                    <el-radio v-model="mediumOfStudy" label="English">English</el-radio>
                </el-form-item>
                <el-form-item label="Father Name:" prop="fatherName">
                    <el-input v-model="form.fatherName" clearable style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="Mother Name:" prop="motherName">
                    <el-input v-model="form.motherName" clearable style="width:300px"></el-input>
                </el-form-item>
                <el-form-item label="Home Phone Number:" prop="homePhoneNumber">
                    <el-input v-model.number="form.homePhoneNumber" clearable placeholder="1234567890" maxlength="10"
                        style="width:220px">
                        <template slot="prepend">+91</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="Languages Known:" prop="checkList">
                    <el-checkbox-group v-model="form.checkList">
                        <el-checkbox label="Tamil "></el-checkbox>
                        <el-checkbox label="English "></el-checkbox>
                        <el-checkbox label="Hindi "></el-checkbox>
                        <el-checkbox label="Telugu "></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Skills:" prop="skills">
                    <el-select v-model="form.skills" multiple collapse-tags style="margin-left: 20px;"
                        placeholder="Select ">
                        <el-option v-for="(item, index) in skill" :key="index" :label="item" :value="item" clearable>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form ref='form' :model="form.address" :rules='rules' label-width="200px">
                    <el-form-item label="Address:-"><i class="el-icon-chat-line-square"></i>
                    </el-form-item>
                    <el-form-item label="Door Number:" prop="doorNumber">
                        <el-input v-model="form.address.doorNumber" clearable style="width:300px"></el-input>
                    </el-form-item>
                    <el-form-item label="Street Name:" prop="streetName">
                        <el-input v-model="form.address.streetName" clearable style="width:300px"></el-input>
                    </el-form-item>
                    <el-form-item label="Town/City:" prop="city">
                        <el-input v-model="form.address.city" clearable style="width:300px"></el-input>
                    </el-form-item>
                    <el-form-item label="State:" prop="states">
                        <el-select v-model="form.address.states" placeholder="Select" clearable>
                            <el-option v-for="(item, index) in state" :key="index" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Country:" prop="countryList">
                        <el-select v-model="form.address.countryList" placeholder="Select" clearable>
                            <el-option v-for="(item, index) in country" :key="index" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="PinCode:" prop="pinCode">
                        <el-input v-model.number="form.address.pinCode" clearable placeholder="600068" maxlength="6"
                            style="width:220px">
                        </el-input>
                    </el-form-item>
                </el-form>
                <el-form-item>
                    <el-button @click="cancelForm" type="danger">Cancel</el-button>
                    <el-button @click="handleSubmit" type="success" round>Save</el-button>
                </el-form-item>
            </el-form>
        </el-dialog><br />
        <br />
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="studentName" label="Student Name">
            </el-table-column>
            <el-table-column prop="studentRegistrationNumber" label="Student Registration Number" width="200">
            </el-table-column>
            <el-table-column prop="dateOfBirth" label="Date Of Birth">
            </el-table-column>
            <el-table-column prop="gender" label="Gender">
            </el-table-column>
            <el-table-column prop="phoneNumber" label="Phone Number">
            </el-table-column>
            <el-table-column prop="fatherName" label="Father Name">
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="200">
                <template slot-scope="scope">
                    <el-button type="info" size="mini" @click.native.prevent="editForm(scope.$index, tableData)"
                        icon="el-icon-edit">
                        Edit
                    </el-button>

                    <el-button type="danger" size="mini" @click.native.prevent="deleteRow(scope.$index, tableData)"
                        icon="el-icon-edit">
                        Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            indexNumber: 0,
            gender: '',
            mediumOfStudy: '',
            country: ['America', 'Africa', 'Australia', 'Bangladesh', 'Bhutan', 'Europe', 'China', 'France', 'Germany', 'India', 'Japan', 'Malaysia', 'Singapore', 'Uganda', 'United Kingdom', 'Zimbabwe'],
            state: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
            skill: ['c ', 'c++ ', 'python ', 'java ', 'html&css ', 'MS office ', 'cricket ', 'volleyball ', 'football ', 'carrom ', 'chess '],
            form: {
                studentName: '',
                studentRegistrationNumber: '',
                dateOfBirth: "",
                phoneNumber: '',
                email: '',
                fatherName: '',
                motherName: '',
                homePhoneNumber: '',
                skills: [],
                checkList: [],
                address: {
                    doorNumber: '',
                    streetName: '',
                    city: '',
                    states: '',
                    countryList: '',
                    pinCode: ''
                }
            },
            tableData: [],
            rules: {
                studentName: [{ required: true, message: 'Please input Student Name', trigger: 'blur' }],
                studentRegistrationNumber: [{ required: true, message: 'Please input Student Registration Number', trigger: 'blur' }],
                dateOfBirth: [{ required: true, message: 'Choose Date Of Birth', trigger: 'blur' }],
                gender: [{ required: true, message: 'Choose Gender' }],
                phoneNumber: [{ type: 'number', required: true, message: 'Please input Phone Number', trigger: 'blur' }],
                email: [{ type: 'email', required: true, message: 'Please input valid Email', trigger: 'blur' }],
                mediumOfStudy: [{ required: true, message: 'Choose Medium Of Study' }],
                fatherName: [{ required: true, message: 'Please input Father Name', trigger: 'blur' }],
                motherName: [{ required: true, message: 'Please input Mother Name', trigger: 'blur' }],
                homePhoneNumber: [{ type: 'number', required: true, message: 'Please input Home Phone Number', trigger: 'blur' }],
                checkList: [{ required: true, message: 'Choose the Known languages', trigger: 'change' }],
                skills: [{ required: true, message: 'Choose the Known Skills', trigger: 'change' }],
                doorNumber: [{ required: true, message: 'Please input Door Number', trigger: 'blur' }],
                streetName: [{ required: true, message: 'Please input Street Name', trigger: 'blur' }],
                city: [{ required: true, message: 'Please input Town/City Name', trigger: 'blur' }],
                states: [{ required: true, message: 'Choose the State', trigger: 'change' }],
                countryList: [{ required: true, message: 'Choose the Country', trigger: 'change' }],
                pinCode: [{ type: 'number', required: true, message: 'Please input Pincode Number', trigger: 'blur' }],
            }
        };
    },
    methods: {
        cancelForm() {
            this.clearform()
            this.$refs.form.resetFields()
            this.dialogVisible = false
        },
        deleteRow: function (index) {
            this.$confirm('This will permanently delete. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Delete completed',
                },
                    this.tableData.splice(index, 1))
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Delete canceled'
                });
            });
        },
        handleSubmit() {
            this.tableData.push({
                studentName: this.form.studentName,
                studentRegistrationNumber: this.form.studentRegistrationNumber,
                dateOfBirth: this.form.dateOfBirth,
                gender: this.gender,
                phoneNumber: this.form.phoneNumber,
                email: this.form.email,
                mediumOfStudy: this.mediumOfStudy,
                fatherName: this.form.fatherName,
                motherName: this.form.motherName,
                homePhoneNumber: this.form.homePhoneNumber,
                checkList: this.form.checkList,
                skills: this.form.skills,
                doorNumber: this.form.address.doorNumber,
                streetName: this.form.address.streetName,
                city: this.form.address.city,
                states: this.form.address.states,
                countryList: this.form.address.countryList,
                pinCode: this.form.address.pinCode
            }),
                this.clearform()
            this.dialogVisible = false
            //return console.log(JSON.stringify(this.tableData))
        },
        clearform() {
            this.form.studentName = '',
                this.form.studentRegistrationNumber = '',
                this.form.dateOfBirth = '',
                this.gender = '',
                this.form.phoneNumber = '',
                this.form.email = '',
                this.mediumOfStudy = '',
                this.form.fatherName = '',
                this.form.motherName = '',
                this.form.homePhoneNumber = '',
                this.form.checkList = [],
                this.form.address.doorNumber = '',
                this.form.address.streetName = '',
                this.form.address.city = '',
                this.form.address.states = '',
                this.form.address.countryList = '',
                this.form.address.pinCode = '',
                this.form.skills = ''
        },
        editForm(index) {
            this.indexNumber = index
            this.dialogVisible = true
            return this.form = this.tableData(index)
        }
    }
}
</script>