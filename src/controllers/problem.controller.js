const {StatusCodes} = require("http-status-codes") 

function getProblem(req,res)
{
 
    res.status(StatusCodes.NOT_IMPLEMENTED).json({message : "The api endpoint has not been implemented"})

}


function getProblems(req,res)
{
 
    res.status(StatusCodes.NOT_IMPLEMENTED).json({message : "The api endpoint has not been implemented"})



}

function addProblem(req,res)
{

    res.status(StatusCodes.NOT_IMPLEMENTED).json({message : "The api endpoint has not been implemented"})
     

}

function updateProblem(req,res)
{

    res.status(StatusCodes.NOT_IMPLEMENTED).json({message : "The api endpoint has not been implemented"})
     

}

function deleteProblem(req,res)
{

    res.status(StatusCodes.NOT_IMPLEMENTED).json({message : "The api endpoint has not been implemented"})
    
}

function ping(req,res)
{

   res.json({message : "Jenny ruby jane"})

}


module.exports ={

    getProblem,
    getProblems,
    addProblem,
    updateProblem,
    deleteProblem,
    ping

}
