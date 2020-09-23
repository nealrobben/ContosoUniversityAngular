using MediatR;
using System;

namespace ContosoUniversityAngular.Application.Students.Commands.CreateStudent
{
    public class CreateStudentCommand : IRequest
    {
        public string LastName { get; set; }

        public string FirstName { get; set; }

        public DateTime EnrollmentDate { get; set; }
    }
}
