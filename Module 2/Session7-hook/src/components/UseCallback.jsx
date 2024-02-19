import React from 'react'
import { memo } from 'react';

function UseCallback() {
    console.log("UseCallback đã được gọi");
    /*
        memo: chức năng nó sẽ đi kiểm tra xem có prop nào thay đổi khi có component mới 
        re-render, còn không thì thôi
     */
  return (
    <>
        UseCallback
    </>
  )
}
export default memo(UseCallback);
