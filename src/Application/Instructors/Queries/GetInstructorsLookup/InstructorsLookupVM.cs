using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.Instructors.Queries.GetInstructorsLookup
{
    public class InstructorsLookupVM
    {
        public IList<InstructorLookupVM> Instructors { get; }

        public InstructorsLookupVM(IList<InstructorLookupVM> instructors)
        {
            Instructors = instructors;
        }
    }
}
