using AutoMapper;
using ContosoUniversityAngular.Application.Common.Mappings;
using ContosoUniversityAngular.Domain.Entities;
using ContosoUniversityAngular.Domain.Enums;

namespace ContosoUniversityAngular.Application.Students.Queries.GetStudentDetails
{
    public class StudentDetailsEnrollmentVM : IMapFrom<Enrollment>
    {
        public string CourseTitle { get; set; }

        public Grade? Grade { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Enrollment, StudentDetailsEnrollmentVM>()
                .ForMember(d => d.CourseTitle, opt => opt.MapFrom(s => s.Course.Title))
                .ForMember(d => d.Grade, opt => opt.MapFrom(s => s.Grade));
        }
    }
}