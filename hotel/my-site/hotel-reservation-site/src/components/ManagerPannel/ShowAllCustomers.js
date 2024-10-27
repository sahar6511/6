import React,{useState} from 'react';
import { useGetLimitCustomersQuery,useDeleteCustomerMutation } from '../redux/services/cusomersApi';
import Space from '../Space/Space';
import '../../styles/main.scss'

const ShowAllCustomers = () => {
    const[page,setPage] = useState(1)
    const { data: customers, error, isLoding } = useGetLimitCustomersQuery(page);
    const[selectedCustomer,setSelectedCustomer] = useState(null)

    const[deleteCustomer] = useDeleteCustomerMutation()
  return (
    <div className='showallcustomers'>
    
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : customers ?(
        <div>
            <table className='showallcustomers-table'>
                <thead>
                    <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>کد ملی</th>
                        <th>موبایل</th>
                        <th>ایمیل</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                </thead>
              <tbody>

                       {customers.map((customer)=>


                      <tr key={customer.id}>
                        <td>نام و نام خانوادگی : {customer.customerName}{customer.customerFamily}
                         
                         
                        </td>
                        <td> {customer.customerNationalCode}</td>
                        <td>  {customer.customerMobile}</td>
                        <td>   {customer.customerEmail}</td>
                        <td ><button className='btn' style={{background:"#FEA116"}}  onClick={()=>setSelectedCustomer(customer)}>ویرایش</button></td>
                        <td ><button className='delete-btn'  onClick={()=>deleteCustomer(customer.id)}>حذف</button></td>
            
                        </tr>
                       )
                      }
    
              </tbody>
            </table>
            <Space/>
            <Space/>
            <Space/>
          
            <div className='showallcustomers-btns'>
              <button className='btn' disabled={customers.length < 1} onClick={()=>setPage((prev)=>prev + 1)}>بعدی</button>
              <button className='btn' disabled={page <= 2} onClick={()=>setPage((prev)=>prev - 1)}>قبلی</button>
            </div>
        </div>
      )
      :null}

    </div>
  )
}

export default ShowAllCustomers
