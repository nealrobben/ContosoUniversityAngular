using ContosoUniversityAngular.Application.Courses.Queries.GetCoursesForInstructor;
using MediatR;

namespace ContosoUniversityAngular.Application.Courses.Queries.GetCoursesOverview
{
    public class GetCoursesForInstructorQuery : IRequest<CoursesForInstructorOverviewVM>
    {
        public int? ID { get; set; }

        public GetCoursesForInstructorQuery(int? id)
        {
            ID = id;
        }
    }
}
