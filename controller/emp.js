import Emp from '../models/emp'

export const createEmp = async (req, res) => {

        const empName   = req.body.empName
        const empEmail  = req.body.empEmail
        const empMobile = req.body.empMobile

        let emp = new Emp({

            empName,
            empEmail,
            empMobile

        })

        emp.save().then(data => res.status(201).json({success:true, msg:'Emp successfully created!'})).catch(err => {res.status(400).json({success:false, err})})
}
