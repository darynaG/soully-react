import * as actionTypes from "./actionTypes";
import Messages from '../../../../../data/posts'

export const displayDetailsDays = day => {
  var memos = []
  var a = Messages.getAll().then((data)=>{
    console.log(day)
    for(let i=0;i<data.length;i++){
        if(day == data[i].date)
        memos.push(data[i]);
    }
    console.log("dis")
    console.log(memos)
  });
  return {
    type: actionTypes.DISPLAY_DETAILS_DAY,
    payload: {
      day: day,
      mem: memos
    }
  };
};

let id = 0;

export const addAMemo = (text, dayCalendar) => {
  id++;
  let day = new Date().getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const fullDate = `${day}/${month}/${year}`;
  return {
    type: actionTypes.ADD_A_MEMO,
    payload: {
      id: id,
      date: dayCalendar,
      text: {
        date: fullDate,
        content: text
      }
    }
  };
};

export const deleteAMemo = id => {
  return {
    type: actionTypes.DELETE_A_MEMO,
    payload: {
      id: id
    }
  };
};

