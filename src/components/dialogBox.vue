<template>
    <div>
        <el-col>
            <el-button style="margin-top: 12px float-right" @click="Add()">Add</el-button>
        </el-col>
        <el-table :data="tableData" style="width: 100%" max-height="250">
            <el-table-column label="Employee Details">
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
                <el-table-column prop="previousExperiance" label="Previous Experiance" width="150">
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
        </el-table>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DialogBox',
    data() {
        return {
            tableData: [{
                name: 'Tharani Saravanan',
                dob: '29/05/2002',
                gender: 'female',
                address: 'KovalliKombai,Pennagaram,Dharmapuri-636811',
                mobile: '9585683098',
                email: 'tharanisaravananbe@gamil.com',
                id: '478',
                dateOfJoining: '11/07/2022',
                designation: 'Developer',
                previousExperiance: '0 to 6 Months',
                salary: '20000',
                employmentHours: 'full time',
                employmentStatus: 'permanent',
                accountNumber: '1234567',
                bank: 'HDFC',
                branch: 'Nandanam',
                ifsc: '6768'

            },
            {
                name: 'Tharani S',
                dob: '29/05/2002',
                gender: 'female',
                address: 'KovalliKombai,Pennagaram,Dharmapuri-636811',
                mobile: '9585683098',
                email: 'tharanisaravananbe@gamil.com',
                id: '478',
                dateOfJoining: '11/07/2022',
                designation: 'Developer',
                previousExperiance: '0 to 6 Months',
                salary: '20000',
                employmentHours: 'full time',
                employmentStatus: 'permanent',
                accountNumber: '1234567',
                bank: 'HDFC',
                branch: 'Nandanam',
                ifsc: '6768'

            }]
        }
    },
    methods: {
        Add() {
            console.log('methodtriger--->')
            this.$router.push('/employeeDetails')
            console.log('router--->', this.$router)
        }
    }
}
</script>