﻿using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.Home.Queries.GetAboutInfo
{
    public class AboutInfoVM
    {
        public List<EnrollmentDateGroup> Items { get; }

        public AboutInfoVM(List<EnrollmentDateGroup> items)
        {
            Items = items;
        }
    }
}
