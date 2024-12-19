import { Button, Input } from 'antd'
import './UserForm.css' // Đảm bảo tạo tệp CSS này
import { useState } from 'react'

const UserForm = () => {
  // Sửa tên từ UserFrom thành UserForm để chính xác hơn
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const handleClickBtn = () => {
    console.table('>>> check state: ', { fullName, email, password, phone })
  }
  return (
    <div className="user-form-container">
      <h2 className="form-title">User Form</h2>
      <div className="form-fields">
        <div className="form-item">
          <label className="form-label">Full Name</label>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value)
            }}
            className="form-input"
          />
        </div>

        <div className="form-item">
          <label className="form-label">Email</label>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            className="form-input"
          />
        </div>
        <div className="form-item">
          <label className="form-label">Password</label>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            className="form-input"
          />
        </div>
        <div className="form-item">
          <label className="form-label">Phone Number</label>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value)
            }}
            className="form-input"
          />
        </div>
        <div>
          <Button
            // onClick={()=> handleClickBtn()}
            onClick={handleClickBtn}
            type="primary"
          >
            Create user
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserForm
