using MediatR;

namespace ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentDetails
{
    public class GetDepartmentDetailsQuery : IRequest<DepartmentDetailVM>
    {
        public int? ID { get; set; }

        public GetDepartmentDetailsQuery(int? id)
        {
            ID = id;
        }
    }
}
