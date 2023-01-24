interface HabitProps{
  completed: number
}
//53:51
//20*7=140
export function Habit(props: HabitProps){
  return(
    <div className='bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center'>
      {props.completed}
    </div>
  )
}