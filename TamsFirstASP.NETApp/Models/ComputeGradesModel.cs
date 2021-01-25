using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TamsFirstASP.NETApp.Models
{
    public class ComputeGradesModel
    {
        [Required]
        [Range (0, 100)]
        public double assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public double projects { get; set; }

        [Required]
        [Range(0, 100)]
        public double quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public double exams { get; set; }

        [Required]
        [Range(0, 100)]
        public double intex { get; set; }

    }
}
