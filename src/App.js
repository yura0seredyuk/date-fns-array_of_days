import React from "react";
import "./style.css";
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import ua from 'date-fns/locale/uk';
import ru from 'date-fns/locale/ru';
import en from 'date-fns/locale/en-US';

export default function App() {
  const now = new Date();
    const arr = eachDayOfInterval({
        start: startOfWeek(now, { weekStartsOn: 1 }),
        end: endOfWeek(now, { weekStartsOn: 1 })
    });

    let arrOfDays = [];
    arr.map(a => arrOfDays.push(format(a, 'EEEEEE', { locale: ua })))

  return (
    <div>
      {console.log(arrOfDays)}
    </div>
  );
}
