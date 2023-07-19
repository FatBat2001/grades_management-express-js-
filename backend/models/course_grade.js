let course_grade = class {
  constructor(
    material_name,
    material_code,
    material_sim,
    material_status,
    year_work,
    full_grade,
    practical_exams_grade,
    written_exams_grade
  ) {
    this.material_name = material_name;
    this.material_code = material_code;
    this.material_sim = material_sim;
    this.material_status = material_status;
    this.year_work = year_work;
    this.full_grade = full_grade;
    this.practical_exams_grade = practical_exams_grade;
    this.written_exams_grade = written_exams_grade;
    this.setGrade();
  }
  calculateGrade =(grade)=>{
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
  setGrade() {
    this.grade = this.calculateGrade(this.full_grade);
  }
};
export default course_grade;
