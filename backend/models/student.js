let student = class {
    constructor(student_id, student_name, student_national_id) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.student_national_id = student_national_id;
        this.courses = [];
        this.gpa = 0;
        this.score = 0;
    }
    add_course_grade(course) {
        this.score += this.gpa_score(course.grade);
        this.courses.push(course);
        this.gpa = this.score/this.courses.length;
    }
    gpa_score = (grade) => {
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
};
export default student;
