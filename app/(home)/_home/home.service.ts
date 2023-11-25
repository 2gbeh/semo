import __slide1 from "@/public/uploads/slide (1).jpg";
import __slide2 from "@/public/uploads/slide (2).jpg";
import __slide3 from "@/public/uploads/slide (3).jpg";
import __slide4 from "@/public/uploads/slide (4).jpg";
import __slide5 from "@/public/uploads/slide (5).jpg";
//
import { dd, rand } from "@/utils";
import M from "@/utils/constants/MOCK";

export const randomImage = () =>
  [__slide1, __slide2, __slide3, __slide4, __slide5][M.home ? 1 : rand(1, 5)];

export const randomAvatar = () =>
  `/uploads/avatar (${M.home ? 9 : rand(1, 12)}).jpg`;
