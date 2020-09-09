using MediatR;

namespace ContosoUniversityAngular.Application.Courses.Queries.GetCourseDetails
{
    public class GetCourseDetailsQuery : IRequest<CourseDetailVM>
    {
        public int? ID { get; set; }

        public GetCourseDetailsQuery(int? id)
        {
            ID = id;
        }
    }
}
