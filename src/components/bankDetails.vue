<template>
    <div>



        <el-form>

            <div>
                <h3 style align="center">Bank Details</h3>
                </br>
            </div>
            <div>
                <p>Account Number</p>
                <el-input placeholder="Enter Your Account Number" style="width:300px"
                    v-model="bankDetails.accountNumber">
                </el-input>
            </div>
            </br>
            <div>
                <p>Bank Name</p>
                <el-select v-model="bankDetails.bank" clearable placeholder="Select">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </br>
            <div>
                <p>Branch name</p>
                <el-input placeholder="Enter Your Branch Name" style="width:500px" v-model="bankDetails.branch">
                </el-input>
            </div>
            </br>
            <div>
                <p>IFSC Code</p>
                <el-input type="text" placeholder="Enter IFSC Code" style="width:200px" v-model="bankDetails.ifsc"
                    maxlength="4" show-word-limit>
                </el-input>

            </div>

            <el-button style="margin-top: 40px;" @click="submit">Submit</el-button>


        </el-form>

    </div>
</template>

<script>

export default {
    data() {
        return {
            options: [{
                value: 'Bank of Baroda',
                label: 'Bank of Baroda'
            }, {
                value: 'Bank of India',
                label: 'Bank of India'
            }, {
                value: 'Canara Bank',
                label: 'Canara Bank'
            }, {
                value: 'Central Bank of India',
                label: 'Central Bank of India'
            }, {
                value: 'Indian Bank',
                label: 'Indian Bank'
            }, {
                value: 'Indian Overseas Bank',
                label: 'Indian Overseas Bank'
            }, {
                value: 'HDFC',
                label: 'HDFC'
            }],


            bankDetails: {
                accountNumber: '',    //account number
                links: [],
                bank: '',            //bank name
                timeout: null,
                branch: '',
                ifsc: ''
            },

            storedEmployeeData: [],
            active: 0,

        }
    },
    methods: {
        submit() {
            this.storedEmployeeData.push(
                {
                    accountNumber: this.bankDetails.accountNumber,
                    bank: this.bankDetails.bank,
                    branch: this.bankDetails.branch,
                    ifsc: this.bankDetails.ifsc
                }
            )
            return console.log(JSON.stringify(this.storedEmployeeData));



        }
    }
}


</script>