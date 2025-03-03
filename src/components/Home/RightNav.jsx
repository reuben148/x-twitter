import SubToPremium from './SubToPremium';
import Terms from './Terms';
import WhatsHappening from './WhatsHappening';
import WhoToFollow from './WhoToFollow';


export default function RightNav() {
  return (
    <div className='w-full'>
     <SubToPremium/>
     <WhatsHappening/> 
     <WhoToFollow/>
     <Terms/>

    </div>
  )
}
