using AutoMapper;
using ContosoUniversityAngular.Application.Common.Mappings;
using ContosoUniversityAngular.Domain.Entities;
using ContosoUniversityAngular.Domain.Enums;

namespace ContosoUniversityAngular.Application.Students.Queries.GetStudentsForCourse
{
    public class StudentForCourseVM : IMapFrom<Enrollment>
    {
        public string StudentName { get; set; }
        public Grade? StudentGrade { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Enrollment, StudentForCourseVM>()
                .ForMember(d => d.StudentName, opt => opt.MapFrom(s => s.Student.FullName))
                .ForMember(d => d.StudentGrade, opt => opt.MapFrom(s => s.Grade));
        }
    }
}
