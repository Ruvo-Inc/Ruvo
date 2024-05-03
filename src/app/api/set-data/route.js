import { db } from "@/app/libs/firebase/firebaseConfig";
import { collection, addDoc, getDocs  } from "firebase/firestore";
import { NextResponse } from "next/server";
export const POST = async (request)=>{
    try{
        const collectionRef = collection(db, 'requests-driver-rider');
        const payload = await request.json();    
        const querySnapshot = await addDoc(collectionRef, payload);
//         const querySnapshots = await getDocs(collectionRef);
//         querySnapshots.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//         });
        return new NextResponse(JSON.stringify(querySnapshot), {status:200})     
    }
    catch(error){
        console.log("error>>",error)
        return new NextResponse("ERROR" + JSON.stringify(error), {status:500})     
    }
}
