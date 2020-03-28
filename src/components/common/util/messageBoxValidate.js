import { Message, MessageBox } from 'element-ui'

/*************************************仅显示三秒提示类型****************************************************************/
export function messageType(text = '错误',type = 'warning') {
  Message({
    message: text,
    type: type,
    duration: 3 * 1000
  })
}

/*************************************遮罩层提示类型****************************************************************/
/*模态框，遮罩层*/
export function messageBoxType(text = 'Box',type = 'warning') {
  return MessageBox.confirm(text, '提示', {
    type: type,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    closeOnClickModal:false  //点击遮罩层进行关闭
  })
}

const _common = {
  messageBoxType: messageBoxType,
  messageType:messageType,
};

export default _common
