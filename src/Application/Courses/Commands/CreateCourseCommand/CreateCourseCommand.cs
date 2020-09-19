using MediatR;

namespace ContosoUniversityAngular.Application.Courses.Commands.CreateCourse
{
    public class CreateCourseCommand : IRequest
    {
        public string Title { get; set; }

        public int Credits { get; set; }

        public int DepartmentID { get; set; }
    }
}
