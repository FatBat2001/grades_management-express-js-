import React, { useEffect, useState } from "react";
import "../../styling/Table.css";
import axios from "axios";
///allstudent
const A3Table = () => {
  const [grades, setGrades] = useState([]);
  const [course, setCourse] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:5000/admin/allstudentmaterial').then((response) => {
      setCourse(response.data);
     
    })
  }
    , []);
  useEffect(() => {
    axios.get('http://localhost:5000/admin/allstudent').then((response) => {
      setGrades(response.data);
      console.log(response.data);
    
    })
  }
    , []);
  console.log(course);
  console.log(grades);
  const vis = [];
  const student_gpa = [];

    

  const calculateGrade =(grade)=>{
    if(grade>=95)
      return "A"
    else if (grade>=90)
      return "A-"
    else if(grade>=85)
      return "B+"
    else if(grade>=80)
      return "B"
    else if(grade>=75)
      return "B-"
    else if(grade>=70)
      return "C+"
    else if(grade>=65)
      return "C"
    else if(grade>=60)
      return "D+"
    else
      return "F"
  
    
  } 
  const gpa_score = (grade) => {
    if (grade === 'A') return 4;
    else if (grade === "A-") return 3.66;
    else if (grade === "B+") return 3.33;
    else if (grade === "B") return 3;
    else if (grade === "B-") return 2.66;
    else if (grade === "C+") return 2.33;
    else if (grade === "C") return 2;
    else if (grade === "D+") return 1.66;
    else return 0;
  }
  
  // el kol fe el kol 
  grades.map((info) => {
    vis[info.student_id] = false;
    student_gpa[info.student_id] = 0;
    let subjects_count = 0;
    grades.map((info2) => {
      if (info.student_id === info2.student_id) {
        student_gpa[info.student_id] += gpa_score(calculateGrade(info2.full_grade));
        subjects_count += 1;
      }
    })
    student_gpa[info.student_id] /= subjects_count;
  })
  


  return (
    <div className="a3-table">
      <table style={{ textAlign: "center" }}>
        <thead className="table-header">

          <tr>
            <th>

              <tr className="info">رقم الطالب</tr>
              <tr>الرقم القومي</tr>
            </th>
            <th>

              <tr className="info">رقم الجلوس</tr>
              <tr>اسم الطالب</tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الاول</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الثاني </tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الثالث</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الرابع</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الخامس</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر السادس</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر السابع</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th>
              <tr style={{ display: "flex", justifyContent: "center" }}>التقدير الكلي</tr>
            </th>
          </tr>


        </thead>
        <tbody className="table-body" >
        {grades.map((info) => { 
          if (vis[info.student_id]) return null;
          let gpa = 0, total_subjects = 0;
          vis[info.student_id] = true;
          return (            

            <tr>

              <th>
                <tr>{info.student_national_id}</tr>
              </th>
              <th>
                <tr>{info.student_name}</tr>
              </th>
              {grades.map((info2) => {
                let current_grade = calculateGrade(info2.full_grade);
                if (info.student_id === info2.student_id) 
                return (

              <th>
                <tr style={{ display: "flex", justifyContent: "center" }}>{info2.material_name}</tr>
                <tr>
                  <th className="child">{info2.year_work}</th>
                  <th className="child">{info2.practical_exams_grade}</th>
                  <th className="child">{info2.written_exams_grade}</th>
                  <th className="child">{info2.full_grade}</th>
                  <th className="child">{
                  
                  current_grade
                  
                  
                  } </th>
                </tr>
                
              </th>
                )
              })}
          
             
           
              <th >
                <tr style={{ display: "flex", justifyContent: "center" }}> GPA :{student_gpa[info.student_id]}</tr>

              </th>
              
            </tr>
          )})}


        </tbody>
      </table>
    </div>
  );
};

export default A3Table;