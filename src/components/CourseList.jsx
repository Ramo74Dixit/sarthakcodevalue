// search bar with sorting in ascending and descending order

import React, { useState } from 'react'

const CourseList = () => {
    const[search,setSearch]=useState("");
    const [sortOrder,setSortOrder]=useState("asc")
    // array of object 
    const courseData=[
        {id:1,name:"React Basics",price:1499},
        {id:4,name:"Redux Essentials",price:599},
        {id:3,name:"MongoDb for Beginners",price:1199},
        {id:5,name:"Express.js",price:999},
        {id:2,name:"Node JS Mastery",price:1699},
    ]

    const filteredCourse=courseData.filter(course=>course.name.toLowerCase().includes(search.toLowerCase())).sort((a,b)=>{
        return sortOrder==="asc" ? a.price-b.price : b.price-a.price
    })
  return (   
    <div>
      <input
      type="search"
      placeholder='Seach Your Course'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <button onClick={()=>setSortOrder("asc")}>Low to High</button>
      <button onClick={()=>setSortOrder("desc")}>High to Low</button>
      
        <ul>
           {
            filteredCourse.length>0 ?(filteredCourse.map((course)=><li key={course.id}>{course.name}-{course.price}</li>)):(
                <h1>No Course Found</h1>
            )
           }
        </ul>
      
    </div>
  )
}

export default CourseList
