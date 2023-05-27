import { db } from '@/lib/firebase/initFirebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'

function CreateNotebook (name, user) {
  // eslint-disable-next-line react/prop-types
  if (name === '') {
    console.log('Please enter a name for your notebook')
    return
  }
  if (!user) return
  const sendData = async () => {
    try {
      const userDoc = doc(db, user.id, name)
      await setDoc(userDoc, {
        // eslint-disable-next-line react/prop-types
        name,
        created: Timestamp.fromDate(new Date()),
        modified: Timestamp.fromDate(new Date()),
       content: '[{"type":"freedraw","version":3,"versionNonce":1473094818,"isDeleted":false,"id":"_roEyPQerFpG_9oBZdeZ9","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":908,"y":-547,"strokeColor":"#000000","backgroundColor":"transparent","width":0.0001,"height":0.0001,"seed":238948578,"groupIds":[],"roundness":null,"boundElements":[],"updated":1685147206085,"link":null,"locked":false,"points":[[0,0],[0.0001,0.0001]],"lastCommittedPoint":null,"simulatePressure":true,"pressures":[]},{"type":"text","version":60,"versionNonce":1100592367,"isDeleted":false,"id":"Xat-aHcB6XJULrnxOjRJN","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":2,"opacity":100,"angle":0,"x":277,"y":49,"strokeColor":"#000000","backgroundColor":"transparent","width":96.57989501953125,"height":25,"seed":1776894383,"groupIds":[],"roundness":null,"boundElements":[],"updated":1685166378044,"link":null,"locked":false,"fontSize":20,"fontFamily":1,"text":"NoteVision","textAlign":"left","verticalAlign":"top","containerId":null,"originalText":"NoteVision","lineHeight":1.25,"baseline":18},{"type":"diamond","version":11,"versionNonce":578703343,"isDeleted":false,"id":"XfU7rUCzsgNM69ZPMLd-P","fillStyle":"hachure","strokeWidth":1,"strokeStyle":"solid","roughness":1,"opacity":100,"angle":0,"x":623,"y":1034,"strokeColor":"#000000","backgroundColor":"transparent","width":87,"height":99,"seed":307495247,"groupIds":[],"roundness":{"type":2},"boundElements":[],"updated":1685166354627,"link":null,"locked":false}]' 
      })
      return 0
    } catch (error) {
      console.log(error)
      return 1
    }
  }
  sendData()
  return 0
}

export default CreateNotebook
