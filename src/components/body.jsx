import { useEffect, useState } from "react";

function Body(){
    const [profile, setprofile] = useState([])
    const [profilewanted, setprofilewanted] = useState("")
    async function generateprofile(count){
        const response =  await fetch(`https://api.github.com/users?since=217296643&per_page=${count}`)
        const data = await response.json()
        setprofile(data)
    }
    useEffect(()=>{
        generateprofile(10);
    },[])
    return(
        <>
            <div id="search">
                <input type="text"  placeholder="Find Number of Profiles" value={profilewanted} onChange={(event)=>{setprofilewanted(event.target.value)}}/>
                <button onClick={()=>generateprofile(Number(profilewanted))}>Search profiles</button>
            </div>
            <div className="profile">
                {profile.map((value)=>{
                    return(
                        <div className="user" key={value.id}>
                            <img src={value.avatar_url} alt="Profile Photo"/>
                            <h1>{value.login}</h1>
                            <h2>
                                <a href={value.html_url} target="_blank">GitHub Profile</a>
                            </h2>
                        </div>
                    )})
                }
            </div>
        </>
    )
}

export default Body;