import React,{useState, useEffect} from 'react'
import { DisplayTable } from './DisplayTable';



const getStudentData=()=>{
  const data = localStorage.getItem('details');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const StudentForm = () => {


  const [students, setStudents]=useState(getStudentData());


  const [name, setName]=useState('');
  const [passowrd, setPassword]=useState('');
  const [rollnumber, setRollnumber]=useState('');
  const[email, setEmail]= useState('')

 
  const handleSubmit=(e)=>{
    e.preventDefault();
  
    let student={
        passowrd,
       name,
      rollnumber,
      email
    }
    setStudents([...students,student]);
    setName('')
    setEmail('')
    setPassword('');
    setRollnumber('')
   
  }

 
  const deleteStudent=(rollnum)=>{
    const filteredstudents=students.filter((element,index)=>{
      return element.rollnumber !== rollnum
    })
    setStudents(filteredstudents);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('details',JSON.stringify(students));
  },[students])

  return (
    <div className='wrapper'>
      <h1>Registration Page</h1>
     
      <div className='main'>
        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleSubmit}>
            <label>Student Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Password</label>
            <input type="password" className='form-control' required
            onChange={(e)=>setPassword(e.target.value)} value={passowrd}></input>
            <br></br>
            <label>Roll Number</label>
            <input type="number" className='form-control' required
            onChange={(e)=>setRollnumber(e.target.value)} value={rollnumber}></input>
            <br></br>
            <label>Email</label>
            <input type="email" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <div className='btn'>
            <button type="submit" className='btn btn-success btn-md'>
              Submit
            </button>
            </div>
          </form>
         
        </div>

        <div className='view-container'>
          {students.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>name</th>
                  <th>email</th>
                    <th>password</th>
                   <th>roll number</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <DisplayTable students={students} deleteStudent={deleteStudent}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setStudents([])}>Remove All</button>
          </>}
          {students.length < 1 && <div>No Students are there</div>}
        </div>

      </div>
    </div>
  )
}

export default StudentForm
