using AutoMapper;
using ContosoUniversityAngular.Domain.Entities;
using ContosoUniversityAngular.Application.Common.Mappings;

namespace ContosoUniversityAngular.Application.Instructors.Queries.GetInstructorsLookup
{
    public class InstructorLookupVM : IMapFrom<Instructor>
    {
        public int ID { get; set; }
        public string FullName { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Instructor, InstructorLookupVM>();
        }

        public override string ToString()
        {
            return $"{ID} - {FullName}";
        }
    }
}
