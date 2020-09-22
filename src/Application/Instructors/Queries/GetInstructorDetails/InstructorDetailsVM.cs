using AutoMapper;
using ContosoUniversityAngular.Application.Common.Mappings;
using ContosoUniversityAngular.Domain.Entities;
using System;

namespace ContosoUniversityAngular.Application.Instructors.Queries.GetInstructorDetails
{
    public class InstructorDetailsVM : IMapFrom<Instructor>
    {
        public int InstructorID { get; set; }

        public string LastName { get; set; }

        public string FirstName { get; set; }

        public DateTime HireDate { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Instructor, InstructorDetailsVM>()
                .ForMember(d => d.InstructorID, opt => opt.MapFrom(s => s.ID))
                .ForMember(d => d.FirstName, opt => opt.MapFrom(s => s.FirstMidName));
        }
    }
}
