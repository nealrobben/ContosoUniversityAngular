using MediatR;

namespace ContosoUniversityAngular.Application.Instructors.Queries.GetInstructorDetails
{
    public class GetInstructorDetailsQuery : IRequest<InstructorDetailsVM>
    {
        public int? ID { get; set; }

        public GetInstructorDetailsQuery(int? id)
        {
            ID = id;
        }
    }
}
