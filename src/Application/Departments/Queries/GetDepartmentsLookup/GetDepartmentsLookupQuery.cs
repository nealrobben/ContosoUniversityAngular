using MediatR;
using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentsLookup
{
    public class GetDepartmentsLookupQuery : IRequest<List<DepartmentLookupVM>>
    {
    }
}
