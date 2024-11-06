import Navbar from "../components/navbar"
export default async function Qualification(){
    await new Promise((resolve)=>{
        setTimeout(resolve, 3000);
    })
    return(
        <div className=" m-2"> 
            <Navbar />
         
            <h1 className=" m-5 p-2 items-center"> <u><b>My Qualification page</b></u>
                <p className=" m-5 p-2 items-center"> I have done <b>Bachelor of Technology (4 years)</b> in <b>Mechanical Technology</b> from <b>Indus University Karachi</b></p>
            </h1>

        </div>
    );
}