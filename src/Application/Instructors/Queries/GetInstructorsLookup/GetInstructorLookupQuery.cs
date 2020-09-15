using ContosoUniversityAngular.Application.Instructors.Queries.GetInstructorsLookup;
using MediatR;
using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.Instructors.Queries.GetInstructorsLookup
{
    public class GetInstructorLookupQuery : IRequest<List<InstructorLookupVM>>
    {
    }
}
