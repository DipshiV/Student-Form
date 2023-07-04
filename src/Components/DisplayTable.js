import React from 'react'

import {AiFillDelete} from 'react-icons/ai'

export const DisplayTable = ({students,deleteStudent}) => {
    
    return students.map(stud=>(
        
        <tr key={stud.rollnumber}>
            <td>{stud.name}</td>
            <td>{stud.email}</td>
            <td>{stud.password}</td>
            <td>{stud.rollnumber}</td>
            <td className='delete-btn' onClick={()=>deleteStudent(stud.rollnumber)}>
                <AiFillDelete/>
            </td>           
        </tr>            
    
))
}