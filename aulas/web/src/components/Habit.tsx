import * as C from './styles';

interface HabitProps{
  completed: number
}
//53:51
//20*7=140
export function Habit(props: HabitProps){
  return(
    <div className=''>
      {props.completed}
    </div>
  )
}