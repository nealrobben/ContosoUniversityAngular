using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.Students.Queries.GetStudentsForCourse
{
    public class StudentsForCourseVM
    {
        public IList<StudentForCourseVM> Students { get; }

        public StudentsForCourseVM(IList<StudentForCourseVM> students)
        {
            Students = students;
        }
    }
}
