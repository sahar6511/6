import React, { useState } from 'react';
import { useGetRoomByIdQuery } from '../redux/services/roomsApi';
import Input from '../Input/Input';
import Error from '../Error/Error';
import Warning from '../Warning/Warning';

const ShowRoomById = () => {
    const[roomId,setRoomId]=useState()
    const { data, error, isLoading } = useGetRoomByIdQuery(roomId);
  return (
    <div>
        لطفا کد اتاق مورد نظر را وارد کنید :
        <Input className="w-30" handleInputChange={(event)=>setRoomId(event.target.value)}/>
        {error ? (
          <Error>اتاقی با کد وارد شده وجود ندارد</Error>
        ) : isLoading ? (
          <Warning>در حال واکشی اطلاعات</Warning>
        ) : data ? (
          <div className="">
            <table>
              <thead>
                <tr>
                  <th>کد اتاق</th>
                  <th>نام اتاق </th>
                 
                </tr>
              </thead>
              <tbody>

                       
                      <tr key={data.id}>
                        <td>
                          {data.id} {}
                          {data.title}
                        </td>
                       
                        </tr>
                      
                       
   
                     

                   
              </tbody>
            </table>
          </div>
        ) : (
          null
        )}
    </div>
  )
}

export default ShowRoomById