using MediatR;
using System;

namespace ContosoUniversityAngular.Application.Instructors.Commands.CreateInstructor
{
    public class CreateInstructorCommand : IRequest
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime HireDate { get; set; }
    }
}
