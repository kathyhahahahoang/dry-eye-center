import melanie from "../assets/images/melanie.jpg";
import daddy from "../assets/images/daddy.jpg";

export type DoctorsObject = {
  name: string;
  position: string;
  school: string;
  image?: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  desc5?: string;
};

export const doctors: DoctorsObject[] = [
  {
    name: "Dr. Melanie Frogozo, OD, FAAO, FSLS",
    position: "Optometrist",
    school: "University of Houston College of Optometry",
    image: melanie,
    desc1:
      "Dr. Melanie Frogozo is an optometrist who is residency trained in the treatment and management of anterior segment disease through medically necessary contact and prosthetic lenses. Originally from Houston, she completed college at the University of Texas at Austin and optometry school at the University of Houston.",
    desc2:
      "After graduation in 2008, she practiced within a commercial optometry setting in Kansas City, MO and it was during this time she became interested in advancing her knowledge in eye disease and specialty contact lenses. In 2011, she made the decision to pursue a residency in cornea and contact lenses at the University of Houston where she also completed a rotation at the PROSE clinic at Alkek Eye Center at the Baylor College of Medicine. After residency, she took a faculty position with the prestigious University of Iowa Department of Ophthalmology and Visual Sciences where she continued to develop her specialty. In 2013, she returned to Texas and joined Alamo Eye Care. ",
    desc3:
      "Dr. Frogozo provides routine eye care, fits contact lenses on both children and adults, and manages eye diseases such as glaucoma, diabetic eye exams, macular degeneration, and dry eye. She is the director of The Contact Lens Institute of San Antonio at Alamo Eye Care. Her expertise is managing very complex corneal and anterior segment cases with specialty rigid and soft gas permeable contact lenses such as keratoconus, keratoplasty, pediatric and adult aphakia, trauma, and graft versus host disease. She also enjoys fitting soft and hard bifocal contact lenses and contact lenses for orthokeratology. Her additional professional interests include nutrition and its role in systemic and ocular disease, treatment and management of blepharitis, and custom scleral lens fitting based on 3D imaging and molding.",
    desc4:
      "She is a fellow of the American Academy of Optometry and the Scleral Lens Education Society, and a member of the American Optometry Association, Texas Optometry Association, and the Ocular Nutrition Society.",
    desc5:
      "Additionally, she volunteers her time at Haven for Hope I Care San Antonio Clinic. When she is not seeing patients, Dr. Frogozo enjoys spending time with her husband Jon, daughter Teal, and their two cats Ilsa and Mr. Big. She also enjoys practicing ashthanga yoga and ballet. ",
  },
  {
    name: "Dr. Anthony Mac, OD, FAAO",
    position: "Optometrist",
    school: "Massachusetts College of Pharmacy and Health Sciences",
    image: daddy,
    desc1:
      "Dr. Anthony Mac, OD, MPH is an optometrist practicing at Alamo Eye Care in San Antonio, Texas. He is thrilled to be delivering specialty and comprehensive eye care to the community.",
    desc2:
      "Dr. Mac is a native of Southern California, where he earned a bachelor of science degree in Biological Sciences in 2013 at the University of California, Irvine. After a number of years, Dr. Mac moved to New England to study optometry at the Massachusetts College of Pharmacy and Health Sciences. He graduated with dual Doctor of Optometry and Master of Public Health degrees in 2021 as a lifetime member of the Gold Key International Optometric Honor Society.",
    desc3:
      "Dr. Mac went on to pursue a residency in Primary Care Optometry with an emphasis on Ocular Disease at the University of the Incarnate Word Rosenberg School of Optometry. During his training, he completed clinical rotations in various sub-specialties, including cornea and external disease, perioperative care, glaucoma, retina, uveitis, dry eye, and medical contact lenses. As a faculty member of UIWRSO, Dr. Mac had the privilege of being a clinical preceptor for the school’s 3rd-year primary care and 4th-year specialty care clinics. He was a guest lecturer for the university’s optometry and medical schools. He also presented several continuing education lectures for the San Antonio optometric community and posters at national optometric meetings.",
    desc4:
      "Dr. Mac is a fellow of the American Academy of Optometry and a fellow candidate of the Scleral Lens Education Society. He is an advocate for healthcare equity for underserved and LGBTQ+ communities.",
    desc5:
      "When he is not providing care to patients, Dr. Mac enjoys traveling, discovering new eateries, high-adrenaline activities (such as bungee jumping and skydiving), and spending time with his partner and border collie pup.",
  },
];
