import Emp from '../models/emp'

const createEmp = async (req, res, next) => {

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

const updateEmp = async (req, res, next) =>{

    await Emp.findByIdAndUpdate(req.params.id, req.body, (err, emp) =>{

        if(err){


            res.status(400).json({success:false, msg:'Emp not updated successfully!'})

        }

        else{

            res.status(200).json({success:true, msg:'Emp updated successfully!'})
            
        }

    })

}

const readEmps = async (req, res, next) =>{

    await Emp.find( (err, documents) =>{

        if(err){

            res.status(400).json({success:false, msg:'Registers not found!'})

        }

        else{

            res.status(200).json({succes:true, msg: documents})
            
        }

    })

}

const readEmp = async (req, res, next) =>{

    const empId = req.params.id

    Emp.findById(empId, (err, documents) =>{

        if(err){

            res.status(400).json({success:false, msg:documents})

        }

        else{

            res.status(200).json({success:true, msg:documents})

        }

    })

}

const deleteEmp = async (req, res, next) =>{

    const empId = req.params.id

    Emp.findByIdAndDelete(empId, (err, documents) => {

        if(err){

            res.status(400).json({success:false, msg:'Emp not deleted successfully'})

        }

        else{

            res.status(200).json({sucess:true, msg:'Emp deleted successfully!'})


        }

    })

}


module.exports = {

    createEmp,
    updateEmp,
    readEmps,
    readEmp,
    deleteEmp,

}