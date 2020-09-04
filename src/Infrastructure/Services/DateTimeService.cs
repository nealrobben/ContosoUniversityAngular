using ContosoUniversityAngular.Application.Common.Interfaces;
using System;

namespace ContosoUniversityAngular.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
