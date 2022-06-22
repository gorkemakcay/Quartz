﻿using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Entities.Concrete.Projects
{
    public class Link : ITable
    {
        public int Id { get; set; }
        public int MemberId { get; set; }
        public string MemberOf { get; set; }

        public string Creator { get; set; }
        public string TagName { get; set; }
        public bool ShowLabel { get; set; }
        public string SelectDrawing { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
