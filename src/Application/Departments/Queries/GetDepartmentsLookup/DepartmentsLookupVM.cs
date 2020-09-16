using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentsLookup
{
    public class DepartmentsLookupVM
    {
        public IList<DepartmentLookupVM> Departments { get; }

        public DepartmentsLookupVM(IList<DepartmentLookupVM> departments)
        {
            Departments = departments;
        }
    }
}
