﻿using MediatR;
using System;

namespace ContosoUniversityAngular.Application.Instructors.Commands.UpdateInstructor
{
    public class UpdateInstructorCommand : IRequest
    {
        public int? InstructorID { get; set; }

        public string LastName { get; set; }

        public string FirstName { get; set; }

        public DateTime HireDate { get; set; }

        public string OfficeLocation { get; set; }
    }
}
