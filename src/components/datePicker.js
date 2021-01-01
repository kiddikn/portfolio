import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function TideDatePicker(props) {
  const [startDate, setStartDate] = useState(new Date())

  const handleChange = date => {
    // 表示を変更したのち、リフトアップした画像パスを変更
    setStartDate(date)
    props.setTideImg(date)
  }

  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={handleChange}
    />
  )
}

export default TideDatePicker
